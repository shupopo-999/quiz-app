import React from "react";
import type { Question } from "../types/quiz";


export default function QuestionCard({
index,
total,
question,
selected,
onToggle,
onSubmit,
locked,
}: {
index: number;
total: number;
question: Question;
selected: Set<string>;
onToggle: (optionId: string) => void;
onSubmit: () => void;
locked: boolean;
}) {
return (
    <div className="w-full max-w-3xl mx-auto">
        <div className="mb-2 text-sm text-slate-400">問 {index + 1} / {total}</div>
        <div className="rounded-2xl bg-slate-900/60 ring-1 ring-slate-800 shadow-xl">
            <div className="p-5 md:p-6">
                <div className="text-lg md:text-xl font-semibold mb-4 leading-relaxed explanation max-40ch break-anywhere">
                    {question.prompt}
                </div>


                <ul className="space-y-2 max-30ch break-anywhere">
                    {question.options.map((op) => {
                        const checked = selected.has(op.id);
                        return (
                            <li key={op.id}>
                                <label
                                    className={`flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer select-none transition ${
                                    checked
                                    ? "bg-indigo-500/10 border-indigo-500/50"
                                    : "bg-slate-800/60 border-slate-700 hover:border-slate-500"
                                    } ${locked ? "opacity-60 pointer-events-none" : ""}`}
                                >
                                    <input
                                        type="checkbox"
                                        disabled={locked}
                                        checked={checked}
                                        onChange={() => onToggle(op.id)}
                                        className="mt-1 h-4 w-4"
                                    />
                                    <span className="leading-relaxed">{op.text}</span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            
            
                <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-slate-400">複数選択可 / 決定で採点</span>
                    <button
                        onClick={onSubmit}
                        disabled={locked || selected.size === 0}
                        className="rounded-xl bg-emerald-500 disabled:bg-slate-700 hover:bg-emerald-600 active:bg-emerald-700 transition px-4 py-2 font-semibold"
                    >
                        決定
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}