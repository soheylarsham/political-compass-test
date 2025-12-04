
export const GameState = {
    Welcome: 'welcome',
    Settings: 'settings',
    Quiz_1: 'quiz_1',
    Results_1: 'results_1',
    Quiz_2: 'quiz_2',
    Results_2: 'results_2',
    Quiz_3: 'quiz_3',
    Results_3: 'results_3',
    QuestionBankManagement: 'question_bank_management',
};

// FIX: Define and export the Translations interface.
export interface Translations {
  [key: string]: string | Translations;
}

// FIX: Define and export the Language interface.
export interface Language {
  langCode: string;
  langName: string;
  dir: 'ltr' | 'rtl';
  translations: Translations;
}

// FIX: Define QuestionOption, RawQuestion, Question, and QuestionBankType interfaces for strong typing across the app.
export interface QuestionOption {
    text: { [langCode: string]: string };
    economicScore: number;
    socialScore: number;
}

export interface RawQuestion {
    question: { [langCode: string]: string };
    options: QuestionOption[];
}

export interface Question extends RawQuestion {
    id: string;
    enabled: boolean;
}

export type QuestionBankType = Record<number, Question[]>;
