
export type QuizLevel = 1 | 2 | 3;

export type MultilingualText = {
  fa: string;
  en: string;
};

export interface QuestionOption {
  text: MultilingualText;
  economicScore: number;
  socialScore: number;
}

export interface Question {
  id: string;
  enabled: boolean;
  question: MultilingualText;
  options: QuestionOption[];
}

export interface UserAnswer {
  question: MultilingualText;
  selectedOption: QuestionOption;
}

export interface AnalysisResult {
  scores: {
    economic: number;
    social: number;
  };
  politicalIdeology: string;
  summary: string;
  detailedAnalysis: string;
  behavioralTraits: string[];
}

export interface QuizConfig {
  numberOfLevels: 1 | 2 | 3;
  questionsPerLevel: number;
}

export enum GameState {
    Welcome = 'welcome',
    Settings = 'settings',
    Quiz_1 = 'quiz_1',
    Results_1 = 'results_1',
    Quiz_2 = 'quiz_2',
    Results_2 = 'results_2',
    Quiz_3 = 'quiz_3',
    Results_3 = 'results_3',
    QuestionBankManagement = 'question_bank_management',
}

export interface AppError {
  id: number;
  message: string;
  timestamp: string;
}

// Internationalization Types
export type TranslationKey = string;

export type Translations = {
  [key: string]: string | Translations;
};

export interface Language {
  langCode: string;
  langName: string;
  translations: Translations;
  dir: 'ltr' | 'rtl';
}