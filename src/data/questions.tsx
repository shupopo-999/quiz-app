import type { Question } from "../types/quiz";


export const QUESTION_BANK: Question[] = [
    {
        id: "q1",
        prompt: "vi エディタで文書を編集している。コマンドモードで「zz」(大文字のzを2回)を入力した場合、得られる結果として適切なものを選べ。",
        options: [
            { id: "q1o1", text: "ファイルへの書き込みを行わずに vi を終了する" },
            { id: "q1o2", text: "編集中の内容を破棄して vi を終了する" },
            { id: "q1o3", text: "編集中の内容をファイルに書き込んでvi を終了する" },
            { id: "q1o4", text: "編集中の内容を破棄して、直前に保存した内容に戻す" },
        ],
        correctOptionIds: ["q1o3"],
        explanation:
        "[解説]これは、:wq とするのと同じ。1,2,4 の正しいコマンドは以下のとおり。1:q, 2:q!, 4:e!",
        meta: { category: "web", difficulty: "normal" },
    },
    {
        id: "q2",
        prompt: "vi エディタを利用している。直前に実行した編集コマンドを繰り返し実行するには、コマンドモードでどのコマンドを入力すればよいか?",
        options: [
            { id: "q2o1", text: "u" },
            { id: "q2o2", text: "x" },
            { id: "q2o3", text: "." },
            { id: "q2o4", text: ":" },
            { id: "q2o5", text: "_" },
        ],
        correctOptionIds: ["q2o3"],
        explanation: "[解説]u は直前の編集を取り消す、x はカーソル位置の文字を削除する、: はコマンドラインモードに入る、_ は行頭に移動する。",
        meta: { category: "web", difficulty: "normal" },
    },
    {
        id: "q3",
        prompt: "vi を使ってソースコードの編集をしている。行番号を表示させたい場合、コマンドモードでどのように人力すればよいか?",
        options: [
            { id: "q3o1", text: ":n" },
            { id: "q3o2", text: ":set nu" },
            { id: "q3o3", text: "/setnumber" },
            { id: "q3o4", text: ":set number" },
            { id: "q3o5", text: ":set -o" },
        ],
        correctOptionIds: ["q3o2","q3o4"],
        explanation: "「:set~」で、さまざまなコマンドを実行できる。<br/>:set autoindent ... 自動インデント(省略形:ai)\n:set number.....行番号の表示(省略形:nu)\n:set tabstop=4 .... タプ幅の設定(省略形:ts=4)",
        meta: { category: "web", difficulty: "normal" },
    },
    {
        id: "q4",
        prompt: "vi エディタを使っている。カーソルのある行から5行を削除するには、どの操作を行えばよいか。なお、viはコマンドモードであるとする。",
        options: [
            { id: "q4o1", text: "5X" },
            { id: "q4o2", text: "5xx" },
            { id: "q4o3", text: "5D" },
            { id: "q4o4", text: "5dd" },
            { id: "q4o5", text: "5XX" }
        ],
        correctOptionIds: ["q4o4"],
        explanation: "",
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q5",
        prompt: "vi エディタのコマンドモードでの操作説明として正しいものを以下の中からすべて選択せよ。",
        options: [
            { id: "q5o1", text: "0 ....行頭に移動する" },
            { id: "q5o2", text: "5G ....ファイルの5行目に移動する" },
            { id: "q5o3", text: "E ....ファイルの最後の行に移動する" },
            { id: "q5o4", text: "X ....カーソル位置の文字を削除する" },
            { id: "q5o5", text: "$ ....行末に移動する" }
        ],
        correctOptionIds: ["q5o1", "q5o2", "q5o5"],
        explanation: "[解説]\nファイルの最後の行に移動するのは G\nカーソルのある行を削除するのは dd",
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q6",
        prompt: "（問題文の抽出が困難でした。設問文を確認してください）",
        options: [
            { id: "q6o1", text: "h…カーソルを右へ移動" },
            { id: "q6o2", text: "j…カーソルを左へ移動" },
            { id: "q6o3", text: "k…カーソルを上へ移動" },
            { id: "q6o4", text: "l…カーソルを下へ移動" }
        ],
        correctOptionIds: ["q6o3"],
        explanation: '[解説]\n vi には、コマンドモードと入カモードの2種類があります。\n入力モードは、ファイルに文字を入力する際に利用するモードです。一方、コマンドモードはファイルのカーソル\n 移動や、コピーペースト、変更した内容の保存などを行うモードです。\n 今回例題で問われているのは、カーソル移動に関するvi コマンドです。カーソル移動を行うためのvi コマンド\n には以下のような種類があります。\n 1:カーソルを右へ移動\n h :カーソルを左へ移動\n k :カーソルを上へ移動\n j:カーソルを下へ移動\n gg:カーソルをファイルの先頭行に移動\n G : カーソルをファイルの最終行へ移動',
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q7",
        prompt: "以下のコマンドの中で、引数無しで実行した場合にファイルの先頭から10行だけを表示するものはどれか。",
        options: [
            { id: "q7o1", text: "head" },
            { id: "q7o2", text: "cat" },
            { id: "q7o3", text: "tac" },
            { id: "q7o4", text: "n1" },
            { id: "q7o5", text: "tail" }
        ],
        correctOptionIds: ["q7o1"],
        explanation: "",
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q8",
        prompt: "カーソルのある行以下3行を削除するコマンドを1つ選択してください。",
        options: [
            { id: "q8o1", text: "3yy" },
            { id: "q8o2", text: "3dd" },
            { id: "q8o3", text: "3x" },
            { id: "q8o4", text: "3p" }
        ],
        correctOptionIds: ["q8o2"],
        explanation: "",
        meta: { category: "cb41", difficulty: "normal" },
    },
];