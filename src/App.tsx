import React, { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import QuizScreen from "./screens/QuizScreen";
import SummaryScreen from "./screens/SummaryScreen";
import { prepareQuiz } from "./utils/prepareQuiz";
import { QUESTION_BANK } from "./data/questions";
import type { Question, Settings } from "./types/quiz";
import { DEFAULT_SETTINGS } from "./types/quiz";


export default function App({
  bank = QUESTION_BANK,
  defaultSettings = DEFAULT_SETTINGS,
}: {
bank?: Question[];
  defaultSettings?: Settings;
}) {
  type Stage = "title" | "quiz" | "summary";
  const [stage, setStage] = useState<Stage>("title");
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [lastResult, setLastResult] = useState<{ correctCount: number; total: number } | null>(null);
  
  
  const startQuiz = (s: Settings) => {
    const prepared = prepareQuiz(bank, s);
    setSettings(s);
    setQuestions(prepared);
    setLastResult(null);
    setStage("quiz");
  };
  
  
  const finishQuiz = (res: { correctCount: number; total: number }) => {
    setLastResult(res);
    setStage("summary");
  };
  
  
  const backToTitle = () => setStage("title");
  
  
  const retry = () => {
    const prepared = prepareQuiz(bank, settings);
    setQuestions(prepared);
    setLastResult(null);
    setStage("quiz");
  };


  if (stage === "title") {
    return <TitleScreen onStart={startQuiz} bankSize={bank.length} defaultSettings={defaultSettings} />;
  }


  if (stage === "quiz") {
    return <QuizScreen questions={questions} onFinish={finishQuiz} />;
  }


  return (
    <SummaryScreen
      correctCount={lastResult?.correctCount ?? 0}
      total={lastResult?.total ?? 0}
      onRetry={retry}
      onBackToTitle={backToTitle}
    />
  );
}