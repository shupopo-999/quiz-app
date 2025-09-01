import type { Question, Settings } from "../types/quiz";
import { sample, shuffle } from "./random";


export function prepareQuiz(bank: Question[], settings: Settings): Question[] {
const picked = sample(bank, settings.totalQuestions);
return picked.map((q) => ({
...q,
options: settings.shuffleOptions ? shuffle(q.options) : q.options,
}));
}