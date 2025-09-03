import React from "react";


export default function SummaryScreen({
correctCount,
total,
onRetry,
onBackToTitle,
}: {
correctCount: number;
total: number;
onRetry: () => void;
onBackToTitle: () => void;
}) {
    const rate = total === 0 ? 0 : Math.round((correctCount / total) * 100);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 p-4 screen-center">
            <div className="w-full max-w-xl bg-slate-900/60 rounded-2xl shadow-xl p-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">結果</h2>
                <div className="text-5xl font-extrabold mb-2">{correctCount} / {total}</div>
                <div className="text-slate-300 mb-6">正答率 {rate}%</div>
                <div className="flex flex-col md:flex-row gap-3 justify-center">
                    <button
                    onClick={onBackToTitle}
                    className="rounded-xl bg-slate-700 hover:bg-slate-600 active:bg-slate-700 transition px-4 py-3 font-semibold"
                    >
                        タイトルに戻る
                    </button>
                    <button
                    onClick={onRetry}
                    className="rounded-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 transition px-4 py-3 font-semibold"
                    >
                        もう一度挑戦
                    </button>
                </div>
            </div>
        </div>
    );
}