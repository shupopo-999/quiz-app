export type Option = { id: string; text: string };


export type Question = {
    id: string;
    prompt: string;
    options: Option[];
    correctOptionIds: string[]; // 複数可（厳密一致で採点）
    explanation?: string;
    meta?: { category?: string; difficulty?: "easy" | "normal" | "hard" };
};


export type Settings = {
    totalQuestions: number;
    shuffleOptions: boolean;
};


export const DEFAULT_SETTINGS: Settings = {
    totalQuestions: 5,
    shuffleOptions: true,
};