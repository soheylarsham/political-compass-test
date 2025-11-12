import React, { useState, useCallback, useMemo, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import Header from './components/Header';
import QuestionBankManager from './components/QuestionBankManager';
import QuizSettingsModal from './components/QuizSettingsModal';
import PasswordModal from './components/PasswordModal';
import { useQuestionBank } from './hooks/useQuestionBank';
import { generateQuestions as selectRandomQuestions } from './services/geminiService';
import { type UserAnswer, type QuizLevel, type AnalysisResult, GameState, Question, type QuizConfig } from './types';
import { DEFAULT_QUESTIONS_PER_LEVEL, DEFAULT_NUMBER_OF_LEVELS } from './constants';
import { useErrorLog } from './hooks/useErrorLog';
import ErrorLog from './components/ErrorLog';
import { useI18n } from './contexts/I18nContext';
import { useAuth } from './hooks/useAuth';

type ImportedState = { answers: UserAnswer[], result: AnalysisResult, level: QuizLevel };

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Welcome);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [startupError, setStartupError] = useState<string | null>(null);
  const { errors, actions: errorLogActions } = useErrorLog();
  const { t } = useI18n();
  const { isLoggedIn, hasPassword, actions: authActions } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const [loadingMessage, setLoadingMessage] = useState<string>(t('loading.generatingQuestions'));
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState<Question[]>([]);
  const [quizConfig, setQuizConfig] = useState<QuizConfig>({
      numberOfLevels: DEFAULT_NUMBER_OF_LEVELS,
      questionsPerLevel: DEFAULT_QUESTIONS_PER_LEVEL,
  });

  const questionBankHook = useQuestionBank();


  useEffect(() => {
    if (gameState === GameState.Welcome) {
        let isError = false;
        let errorMessage = '';
        for (let i = 1; i <= quizConfig.numberOfLevels; i++) {
            const level = i as QuizLevel;
            const levelCount = questionBankHook.getEnabledQuestionsCount(level);
            if (levelCount < quizConfig.questionsPerLevel) {
                errorMessage = t('errors.notEnoughQuestions', { level, required: quizConfig.questionsPerLevel, available: levelCount });
                isError = true;
                break;
            }
        }
        if (isError) {
            setStartupError(errorMessage);
        } else {
            setStartupError(null);
        }
    }
  }, [questionBankHook, gameState, quizConfig, t]);


  const currentLevel = useMemo((): QuizLevel => {
    if (gameState.startsWith('quiz_')) {
      return parseInt(gameState.split('_')[1]) as QuizLevel;
    }
    if (gameState.startsWith('results_')) {
      return parseInt(gameState.split('_')[1]) as QuizLevel;
    }
    return 1;
  }, [gameState]);

  const handleStartQuiz = useCallback(() => {
    setStartupError(null);
    try {
        const allQuestionsForLevel1 = questionBankHook.questionBank[1];
        const selectedQuestions = selectRandomQuestions(allQuestionsForLevel1, quizConfig.questionsPerLevel, t);
        setCurrentQuizQuestions(selectedQuestions);
        setGameState(GameState.Quiz_1);
        setUserAnswers([]);
        setAnalysisResult(null);
    } catch(e: any) {
        errorLogActions.addError(e.message || t('errors.startQuiz'));
    }
  }, [questionBankHook.questionBank, quizConfig.questionsPerLevel, errorLogActions, t]);
  
  const handleStartNextLevel = useCallback(() => {
      const nextLevel = (currentLevel + 1) as QuizLevel;
      if(nextLevel <= quizConfig.numberOfLevels) {
          try {
            const allQuestionsForNextLevel = questionBankHook.questionBank[nextLevel];
            const selectedQuestions = selectRandomQuestions(allQuestionsForNextLevel, quizConfig.questionsPerLevel, t);
            setCurrentQuizQuestions(selectedQuestions);
            setGameState(`quiz_${nextLevel}` as GameState);
          } catch (e: any) {
            errorLogActions.addError(e.message || t('errors.startNextLevel', { level: nextLevel }));
          }
      }
  }, [currentLevel, questionBankHook.questionBank, quizConfig, errorLogActions, t]);

  const handleQuizComplete = useCallback((answers: UserAnswer[], newResult: AnalysisResult) => {
    const allAnswers = [...userAnswers, ...answers];
    setUserAnswers(allAnswers);

    if (analysisResult) {
        const combinedEconomic = (analysisResult.scores.economic + newResult.scores.economic) / 2;
        const combinedSocial = (analysisResult.scores.social + newResult.scores.social) / 2;
        
        const combinedResult: AnalysisResult = {
            ...newResult,
            scores: { economic: combinedEconomic, social: combinedSocial }
        };
        setAnalysisResult(combinedResult);
    } else {
        setAnalysisResult(newResult);
    }

    setGameState(`results_${currentLevel}` as GameState);
    setIsLoading(false);
  }, [userAnswers, analysisResult, currentLevel]);

  const { clearErrors } = errorLogActions;
  const { logout } = authActions;
  const handleReset = useCallback(() => {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
      setGameState(GameState.Welcome);
      setUserAnswers([]);
      setAnalysisResult(null);
      setStartupError(null);
      clearErrors();
      logout();
  }, [clearErrors, logout]);
  
  const handleImport = useCallback((importedState: ImportedState) => {
    setUserAnswers(importedState.answers);
    setAnalysisResult(importedState.result);
    setGameState(`results_${importedState.level}` as GameState);
    setStartupError(null);
    setIsLoading(false);
  }, []);

  const handleManageQuestions = useCallback(() => {
    setStartupError(null);
    if (isLoggedIn) {
      setGameState(GameState.QuestionBankManagement);
    } else {
      setIsAuthModalOpen(true);
    }
  }, [isLoggedIn]);
  
  const handleSuccessfulLogin = useCallback(() => {
    setIsAuthModalOpen(false);
    setGameState(GameState.QuestionBankManagement);
  }, []);

  const handleShowSettings = useCallback(() => {
    setStartupError(null);
    setGameState(GameState.Settings);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#data=')) {
      try {
        const encodedData = hash.substring(6);
        const decoded = atob(encodedData);
        const importedWrapper = JSON.parse(decoded);

        if (!importedWrapper.validationCode || !/^PC-R-\d{8}-\d{6}$/.test(importedWrapper.validationCode)) {
            throw new Error(t('errors.invalidLinkCode'));
        }

        const importedState: ImportedState = importedWrapper.payload;
        if (importedState.answers && importedState.result && importedState.level) {
          handleImport(importedState);
        } else {
             throw new Error(t('errors.invalidLinkData'));
        }

      } catch (e: any) {
        console.error("Failed to parse data from URL hash:", e);
        errorLogActions.addError(t('errors.loadSharedResults', { error: e.message }));
      }
    }
  }, [handleImport, errorLogActions, t]);


  const renderContent = () => {
    if (gameState === GameState.QuestionBankManagement) {
      return <QuestionBankManager questionBankHook={questionBankHook} onBack={() => setGameState(GameState.Welcome)} addError={errorLogActions.addError} />;
    }

    switch (gameState) {
      case GameState.Welcome:
        return <WelcomeScreen onStart={handleStartQuiz} onImport={handleImport} onManageQuestions={handleManageQuestions} onShowSettings={handleShowSettings} disabled={!!startupError} addError={errorLogActions.addError} />;
      case GameState.Settings:
        return <QuizSettingsModal 
                    initialConfig={quizConfig} 
                    onSave={setQuizConfig}
                    onClose={() => setGameState(GameState.Welcome)} 
                />;
      case GameState.Quiz_1:
      case GameState.Quiz_2:
      case GameState.Quiz_3:
        return (
          <QuizScreen
            level={currentLevel}
            questions={currentQuizQuestions}
            onComplete={handleQuizComplete}
            onReset={handleReset}
            setIsLoading={setIsLoading}
            addError={errorLogActions.addError}
            setLoadingMessage={setLoadingMessage}
          />
        );
      case GameState.Results_1:
      case GameState.Results_2:
      case GameState.Results_3:
        return (
          analysisResult && (
            <ResultsScreen
              result={analysisResult}
              level={currentLevel}
              onNextLevel={handleStartNextLevel}
              onReset={handleReset}
              answers={userAnswers}
              isLastLevel={currentLevel >= quizConfig.numberOfLevels}
            />
          )
        );
      default:
        return <WelcomeScreen onStart={handleStartQuiz} onImport={handleImport} onManageQuestions={handleManageQuestions} onShowSettings={handleShowSettings} disabled={!!startupError} addError={errorLogActions.addError} />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-gray-900 to-rose-900/40 opacity-50 z-0"></div>
      <ErrorLog errors={errors} removeError={errorLogActions.removeError} clearErrors={errorLogActions.clearErrors} />
       {isAuthModalOpen && (
          <PasswordModal 
            hasPassword={hasPassword}
            login={authActions.login}
            setPassword={authActions.setPassword}
            onClose={() => setIsAuthModalOpen(false)}
            onSuccess={handleSuccessfulLogin}
          />
       )}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header onReset={handleReset} />
        <main className="mt-8">
          {startupError && gameState === GameState.Welcome && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6 text-center">
              <p><strong>{t('errors.label')}:</strong> {startupError}</p>
            </div>
          )}
          {isLoading ? (
             <div className="flex flex-col items-center justify-center h-64">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-500"></div>
                <p className="mt-4 text-cyan-300 text-lg">{loadingMessage}</p>
            </div>
          ) : renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;