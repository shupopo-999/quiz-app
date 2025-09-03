import React, { useMemo, useState } from "react";
import type { Question } from "../types/quiz";
import QuestionCard from "../components/QuestionCard";
import { eqSet } from "../utils/random";
import "../types/quiz.css";

export default function QuizScreen({
questions,
onFinish,
}: {
questions: Question[];
onFinish: (result: { correctCount: number; total: number }) => void;
}) {
    const total = questions.length;
    const [idx, setIdx] = useState(0);
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [locked, setLocked] = useState(false); // 決定後はロック
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [correctCount, setCorrectCount] = useState(0);


    const q = questions[idx];
    const correctSet = useMemo(() => new Set(q.correctOptionIds), [q]);


    const handleToggle = (optionId: string) => {
        if (locked) return;
        setSelected((prev) => {
            const next = new Set(prev);
            if (next.has(optionId)) next.delete(optionId);
            else next.add(optionId);
            return next;
        });
    };


    const handleSubmit = () => {
        if (locked || selected.size === 0) return;
        const ok = eqSet(selected, correctSet);
        setIsCorrect(ok);
        setLocked(true);
        if (ok) setCorrectCount((c) => c + 1);
    };


    const handleNext = () => {
        if (idx + 1 < total) {
            setIdx((i) => i + 1);
            setSelected(new Set());
            setLocked(false);
            setIsCorrect(null);
        } else {
            onFinish({ correctCount, total });
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 p-4 screen-center">
            <div className="mx-auto max-w-3xl">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">クイズ</h2>
                    <div className="text-sm text-slate-300">正答 {correctCount} / {total}</div>
                </div>


                <QuestionCard
                    index={idx}
                    total={total}
                    question={q}
                    selected={selected}
                    onToggle={handleToggle}
                    onSubmit={handleSubmit}
                    locked={locked}
                />


                {locked && (
                    <div
                        className={`mt-4 w-full max-w-3xl mx-auto rounded-2xl p-5 ring-1 shadow-xl ${
                        isCorrect
                        ? "bg-emerald-500/10 ring-emerald-600/50"
                        : "bg-rose-500/10 ring-rose-600/50"
                        }`}
                    >
                        <div className="font-bold mb-2">{isCorrect ? "正解！" : "不正解"}</div>
                        <div className="text-slate-200 explanation max-40ch break-anywhere">{q.explanation || "この問題に解説は設定されていません。"}</div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleNext}
                                className="rounded-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 transition px-4 py-2 font-semibold"
                            >
                                {idx + 1 === total ? "結果へ" : "次へ"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}