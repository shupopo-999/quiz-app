import React, { useState } from "react";
import type { Settings } from "../types/quiz";


export default function TitleScreen({
onStart,
bankSize,
defaultSettings,
}: {
onStart: (settings: Settings) => void;
bankSize: number;
defaultSettings: Settings;
}) {
const [totalQuestions, setTotalQuestions] = useState<number>(
Math.min(defaultSettings.totalQuestions, bankSize)
);
const [shuffleOptions, setShuffleOptions] = useState<boolean>(
defaultSettings.shuffleOptions
);


return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 p-4">
<div className="w-full max-w-xl bg-slate-900/60 rounded-2xl shadow-xl p-6">
<h1 className="text-2xl md:text-3xl font-bold mb-4">100点取るぞ！</h1>
<p className="text-slate-300 mb-6">問題は毎回ランダムに抽出・並び替えられます。</p>


<div className="space-y-4">
<label className="block">
<span className="text-sm text-slate-300">出題数（最大 {bankSize} 問）</span>
<input
type="number"
min={1}
max={bankSize}
value={totalQuestions}
onChange={(e) =>
setTotalQuestions(
Math.max(1, Math.min(bankSize, Number(e.target.value) || 1))
)
}
className="mt-1 w-full rounded-xl bg-slate-800 px-3 py-2 outline-none ring-1 ring-slate-700 focus:ring-indigo-500"
/>
</label>


<label className="inline-flex items-center gap-2">
<input
type="checkbox"
checked={shuffleOptions}
onChange={(e) => setShuffleOptions(e.target.checked)}
className="h-4 w-4"
/>
<span className="text-sm">選択肢を毎問シャッフルする</span>
</label>
</div>


<button
onClick={() => onStart({ totalQuestions, shuffleOptions })}
className="mt-6 w-full rounded-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 transition px-4 py-3 font-semibold"
>
スタート
</button>
</div>
</div>
);
}