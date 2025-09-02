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
        explanation: `[解説]\n
                    これは、:wq とするのと同じ。1,2,4 の正しいコマンドは以下のとおり。1:q, 2:q!, 4:e!`,
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
        explanation: `[解説]\n
                    u は直前の編集を取り消す、\n
                    x はカーソル位置の文字を削除する、\n
                    : はコマンドラインモードに入る、\n
                    _ は行頭に移動する。`,
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
        explanation: `[解説]\n
                        「:set~」で、さまざまなコマンドを実行できる。\n
                        :set autoindent ... 自動インデント(省略形:ai)\n
                        :set number.....行番号の表示(省略形:nu)\n
                        :set tabstop=4 .... タプ幅の設定(省略形:ts=4)`,
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
        explanation: `[解説]\n
                    ファイルの最後の行に移動するのは G\n
                    カーソルのある行を削除するのは dd`,
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
        explanation: `[解説]\n
                    vi には、コマンドモードと入カモードの2種類があります。\n
                    入力モードは、ファイルに文字を入力する際に利用するモードです。一方、コマンドモードはファイルのカーソル\n 
                    移動や、コピーペースト、変更した内容の保存などを行うモードです。\n 
                    今回例題で問われているのは、カーソル移動に関するvi コマンドです。カーソル移動を行うためのvi コマンド\n
                    には以下のような種類があります。\n
                    1:カーソルを右へ移動\n
                    h :カーソルを左へ移動\n
                    k :カーソルを上へ移動\n
                    j:カーソルを下へ移動\n
                    gg:カーソルをファイルの先頭行に移動\n
                    G : カーソルをファイルの最終行へ移動`,
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
        explanation: `[解説]\n
                    カーソルのある行を削除するコマンドは「dd」です。「dd」コマンドの前に数字を付けることで、削除する対象の\n
                    行数を指定することができます。\n
                                $ vi example.txt\n
                                ===================================================\n
                                111111111\n
                                222222222 ←この行にカーソルがある状態で「3dd」を実行\n
                                333333333\n
                                444444444\n
                                555555555\n
                                666666666\n
                                ===================================================\n
                                ↓ 2,3,4行目が削除される\n
                                ===================================================\n
                                111111111\n
                                555555555\n
                                666666666\n
                                ===================================================\n
                    よって、「3dd」はカーソルのある行以下3行を削除できるので正解となります。\n
                    その他の選択肢の解説は以下の通りです。\n
                    [1. 3yy]\n
                    「yy」はカーソルのある行をコピーするコマンドです。「dd」コマンド同様、「yy」コマンドの前に数字を付ける\n
                    ことで、コピーする対象の行数を指定することができます。また、コピーされたデータは一時領域に保管されます。\n
                    よって「3yy」はカーソルのある行以下3行をコピーするコマンドですので不正解です。\n
                    [3. 3x]\n
                    「x」カーソル以降の一文字を削除するコマンドです。「x」コマンドの前に数字を付けることで、削除する文字数\n
                    を指定することができます。\n
                    よって「3x」はカーソル以降の3文字を削除するコマンドですので不正解です。\n
                    [4. 3p]\n
                    「p」はカーソル行の下へ張り付けを行うコマンドです。「p」コマンドの前に数字を付けることで、コピーする回\n
                    数を指定することができます。\n
                    よって「3p」はカーソル行の下へ3回張り付けを行うコマンドですので不正解です。\n
                    vi 操作の基本コマンドと数字を組み合わせることでどのような動きになるのか確認し、使えるようにしておきま\n
                    しょう。\n`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q9",
        prompt: "システムを再起動することのできるコマンドをすべて選択せよ。",
        options: [
            { id: "q9o1", text: "reboot" },
            { id: "q9o2", text: "shutdown" },
            { id: "q9o3", text: "restart" },
            { id: "q9o4", text: "init" },
            { id: "q9o5", text: "inittab" }
        ],
        correctOptionIds: [`q9o1`, `q9o2`, `q9o4`],
        explanation: `「解説]\n
                    以下のいずれのやり方でも、システムを再起動できる。\n
                    # init 6\n
                    init コマンドはランレベルを変更します。ランレベル6は再起動なので、6にランレベルを移行させるとシステ\n
                    ムは再起動する。\n
                    # reboot\n
                    # shutdown -r now`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q10",
        prompt: `# shutdown -r +3
                とすると、どのようになるか?`,
        options: [
            { id: "q10o1", text: "3秒後に再起動する" },
            { id: "q10o2", text: "3分後に再起動する" },
            { id: "q10o3", text: "3時間後に再起動する" },
            { id: "q10o4", text: "間違っているのでエラーになる" }
        ],
        correctOptionIds: ["q10o2"],
        explanation: `[解説]\n
                    「shutdown -r now」などの形で使うことが多いですが、数値を指定すると、指定した分数を経過後に shutdown\n
                    が行われる。`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q11",
        prompt: `vi でファイルを編集している時、編集後に保存せず終了したい。\n
                適切なものを選択してください。`,
        options: [
            { id: "q11o1", text: ":wq" },
            { id: "q11o2", text: ":q!" },
            { id: "q11o3", text: "/q!" },
            { id: "q11o4", text: "/wq" }
        ],
        correctOptionIds: ["q11o2"],
        explanation: `[解説]\n
                    「:q」はviを終了します。\n
                    但し、「:q」はファイル内に変更があった場合は終了することが出来ません。ファイルに変更があった場合でも保\n
                    存せず強制的に終了したい場合、「:q!」を実行します。\n
                    その他の選択肢について解説します。\n
                    1. :wq\n
                    「:w」はファイルを保存します。「:wq」はファイルを保存して終了します。\n
                    よって、誤りです。\n
                    3. /q!\n
                    「/」はファイルの中身から特定の文字を検索します。「/q!」は「q!」という文字列をファイルから検索します。\n
                    よって、誤りです。\n
                    4. /wq!\n
                    「/wq!」は「wq!」という文字列をファイルから検索します。\n
                    よって、誤りです。\n
                    vi は Linux の標準エディタとしてよく使われます。viの基本操作を確認しておきましょう。`,
        meta: { category: "cb41", difficulty: "normal" },
    },
];