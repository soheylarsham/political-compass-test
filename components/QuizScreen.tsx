import React, { useState, useEffect, useCallback } from 'react';
import { analyzeAnswers } from '../services/geminiService';
import { type Question, type UserAnswer, type AnalysisResult, type QuizLevel } from '../types';
import { useI18n } from '../contexts/I18nContext';

interface QuizScreenProps {
  level: QuizLevel;
  questions: Question[];
  onComplete: (answers: UserAnswer[], result: AnalysisResult) => void;
  onReset: () => void;
  setIsLoading: (loading: boolean) => void;
  addError: (error: string) => void;
  setLoadingMessage: (message: string) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ level, questions, onComplete, onReset, setIsLoading, addError, setLoadingMessage }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const { t, language } = useI18n();
  const currentLang = language as 'fa' | 'en';

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }, [questions, level]);

  const handleAnswer = useCallback(async (selectedOptionIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswer: UserAnswer = {
      question: currentQuestion.question,
      selectedOption: currentQuestion.options[selectedOptionIndex],
    };
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsLoading(true);
      setLoadingMessage(t('loading.analyzing'));
      try {
        const result = await analyzeAnswers(updatedAnswers, t);
        onComplete(updatedAnswers, result);
      } catch (e: any) {
        addError(e.message || t('errors.unknown'));
        setIsLoading(false);
      }
    }
  }, [answers, currentQuestionIndex, questions, onComplete, setIsLoading, addError, setLoadingMessage, t]);

  if (questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm animate-fade-in w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1 text-sm text-gray-300">
          <div className="flex-grow">
            <span>{t('quiz.level', { level })}</span>
            <span className="mx-2">|</span>
            <span>{t('quiz.questionProgress', { current: currentQuestionIndex + 1, total: questions.length })}</span>
          </div>
          <button onClick={onReset} className="bg-transparent hover:bg-rose-500/20 text-rose-400 font-semibold hover:text-white py-1 px-3 border border-rose-500/50 hover:border-transparent rounded-lg transition-all duration-300 text-xs">
            {t('common.backToHome')}
          </button>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-cyan-500 to-rose-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-300 leading-relaxed">
        {currentQuestion.question[currentLang]}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="text-right p-4 bg-gray-700/50 rounded-lg border-2 border-transparent hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <p className="text-lg text-gray-200">{option.text[currentLang]}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen;