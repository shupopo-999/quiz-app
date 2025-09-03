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
        explanation: `[解答]\n
                        編集中の内容をファイルに書き込んでvi を終了する\n\n
                    [解説]\n
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
        explanation: `
                    [解答]\n
                        .\n\n
                    [解説]\n
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
        explanation: `[解答]\n
                        :set nu\n
                        :set number\n\n
                        [解説]\n
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
        explanation: `[解答]\n
                        5dd\n\n
                    [解説]\n
                    5dd はカーソルのある行から5行を削除するコマンドです。`,
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
        explanation: `[解答]\n
                    0\n
                    5G\n
                    $ \n\n
                    [解説]\n
                    ファイルの最後の行に移動するのは G\n
                    カーソルのある行を削除するのは dd`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q6",
        prompt: "viのコマンドモードでの操作に関して説明が正しいものを選択してください。",
        options: [
            { id: "q6o1", text: "h…カーソルを右へ移動" },
            { id: "q6o2", text: "j…カーソルを左へ移動" },
            { id: "q6o3", text: "k…カーソルを上へ移動" },
            { id: "q6o4", text: "l…カーソルを下へ移動" }
        ],
        correctOptionIds: ["q6o3"],
        explanation: `[解答]\n
                    
                    [解説]\n
                    k…カーソルを上へ移動\n\n
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
        explanation: `[解答]\n
                    head\n\n
                    [解説]\n
                    head コマンドは、ファイルの先頭から指定した行数だけを表示するコマンドです。引数を指定しない場合は、先頭から10行を表示します。\n
                    cat コマンドはファイル全体を表示するコマンドであり、n1 は無効なコマンドです。tail コマンドはファイルの末尾を表示するコマンドです。`,
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
        explanation: `[解答]
                    3dd\n\n
                    [解説]\n
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
        explanation: `[解答]
                    reboot\n
                    shutdown\n
                    init 6\n\n
                    [解説]\n
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
        explanation: `[解答]
                    3分後に再起動する\n\n
                    [解説]\n
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
        explanation: `[解答]
                    :q!\n\n
                    [解説]\n
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
    {
        id: "q12",
        prompt: "Linux システムを停止することのできるのコマンドをすべて選択してください。",
        options: [
            { id: "q12o1", text: "shutdown -H now" },
            { id: "q12o2", text: "logout" },
            { id: "q12o3", text: "exit" },
            { id: "q12o4", text: "halt" }
        ],
        correctOptionIds: ["q12o1", "q12o4"],
        explanation: `[解答]\n
                    shutdown -H now\n
                    halt\n\n
                    [解説]\n
                    shutdown コマンドと halt コマンドは、システムを停止させるコマンドです。両コマンドともsystemctlのシ\n
                    ンボリックリンクとなっており、プログラムとしては同じものを実行しています。\n
                            # ls -l 'which halt'\n
                            lrwxrwxrwx. 1 root root 16 Oct 6 00:08 /usr/sbin/halt -> .. /bin/systemctl\n
                            # ls -l 'which shutdown'\n
                            lrwxrwxrwx. 1 root root 16 Oct 6 00:08 /usr/sbin/shutdown -> .. /bin/systemctl\n
                        shutdown コマンドと halt コマンドの違いは、指定できるオプションが異なるのと、デフォルトの動作が異な\n
                        る、という点です。\n
                        shutdown コマンドは、デフォルトではシステムを停止後、システムの電源を切りますが、指定する引数オプショ\n
                        ンによって、システムの停止のみやシステムの再起動、指定した時間の経過後にシステムを終了させることができ\n
                        ます。\n
                        shutdown コマンドの構文は以下の通りです。\n
                                shutdown [オプション][時間][通知メッセージ]\n
                        shutdown コマンドの主なオプションは以下の通りです。\n
                                -H , -- halt:システムを停止します\n
                                -P , -- poweroff :  システムの電源を切ります(デフォルト)\n
                                -r , -- reboot :システムを再起動します\n
                                -h , -- halt :システムの電源を切ります( -- poweroff と同様)\n
                        halt コマンドは、shutdown コマンドとは異なり、停止するまでの時間は指定できません。そのため、コマンド\n
                        実行後、すぐにシステムを停止します。\n
                        デフォルトでは、システムを停止するのみで、電源はついたままとなりますが、オプションを指定することで、シ\n
                        ステムの電源を落とすことも可能です。\n
                        halt コマンドの構文は以下の通りです。\n
                                halt [オプション]\n
                        halt コマンドの主なオプションは以下の通りです。\n
                                -p , -- poweroff :システムの電源を切ります\n
                                -f r -- force :強制的にシステムを停止します\n
                                -w , -- wtmp-only :システムを停止せずwtmpレコードにのみ記録します\n
                                -n , -- no-sync:ハードディスク/ストレージメディアを同期せず停止します\n`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q13",
        prompt: `以下のコマンドを実行すると、どうなるか?\n
                $ ls -la > list.txt ; pwd`,
        options: [
            { id: "q13o1", text: "カレントディレクトリのファイル一覧が「list.txt」と「pwd」という名の2つのファイルに書き込まれる" },
            { id: "q13o2", text: "「 list.txt 」 ファイルが存在すればカレントディレクトリのファイル一覧が「 list.txt 」 に書き込まれ、存在しなければカレントディレクトリ名が表示される" },
            { id: "q13o3", text: "カレントディレクトリのファイル一覧とカレントディレクトリ名が表示される" },
            { id: "q13o4", text: "エラーになる" },
            { id: "q13o5", text: "カレントディレクトリのファイル一覧である「list.txt」ファイルが作成された後、カレントディレクトリ名が表示される" }
        ],
        correctOptionIds: ["q13o5"],
        explanation: `[解答]
                    カレントディレクトリのファイル一覧である「list.txt」ファイルが作成された後、カレントディレクトリ名が表示される\n\n
                    [解説]\n
                    「>」は出力をファイルに切り替えるリダイレクトであり、「;」は区切られた複数のコマンドを順に実行する。`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q14",
        prompt: `$ ls -ld /tmp\n
                drwxrwxrwt 2 root root 1024 Mar 10 15:20 /tmp\n
                あるディレクトリを ls コマンドで見ると、以下のように表示された。\n
                この表示の説明としてもっとも適切なものはどれか?`,
        options: [
            { id: "q14o1", text: "/tmp ディレクトリ内の全ファイルのサイズ総計は1024KBである" },
            { id: "q14o2", text: "/tmp ディレクトリにはスティッキービットが設定されている" },
            { id: "q14o3", text: "/tmp ディレクトリは root しか利用できない" },
            { id: "q14o4", text: "/tmp ディレクトリには 2 つのファイルもしくはディレクトリが置かれている" },
            { id: "q14o5", text: "/tmp ディレクトリに作成されたファイルの所有者はすべて root になる" },
        ],
        correctOptionIds: ["q14o2"],
        explanation: `[解答]
                    /tmp ディレクトリにはスティッキービットが設定されている\n\n
                    [解説]\n
                    一般ユーザのアクセス権表示が「rwt」となっているディレクトリにはスティッキービットが設定されているので、\n
                    ファイルの所有者しかそのファイルを削除できない。/tmp ディレクトリは複数のユーザが同時に利用するため、\n
                    勝手にファイルを消されないようにしている。`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q15",
        prompt: `入力ミスにより、以下のようなエラーが表示された。この1sコマンドに続けて以下の echo コマンドを実行すると、下線部には何が表示されるか?\n
                $ ls /homw\n
                ls:/homw: そのようなファイルやディレクトリはありません\n
                $ echo $?`,
        options: [
            { id: "q15o1", text: "1s /homw" },
            { id: "q15o2", text: "1s" },
            { id: "q15o3", text: "そのようなファイルやディレクトリはありません" },
            { id: "q15o4", text: "0" },
            { id: "q15o5", text: "1" }
        ],
        correctOptionIds: ["q15o5"],
        explanation: `[解答]\n
                    1\n\n
                    特殊な変数$?には、直前に実行したコマンドの戻り値が入る。正常終了は0であり、エラーが発生すると0以外`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q16",
        prompt: `bash を使用している環境において、下記のコマンドを実行したとき表示されるものファイル名として正しいもの\n
                はどれか。選択肢から1つ選択してください。`,
        options: [
            { id: "q16o1", text: "filename.c9 " },
            { id: "q16o2", text: "filename.php" },
            { id: "q16o3", text: "filename.a3" },
            { id: "q16o4", text: "filename.4" },
        ],
        correctOptionIds: ["q16o3"],
        explanation: `[解答]\n
                    filename.a3\n\n
                    [解説]\n
                    ワイルドカードには下記のものがあります。\n
                    · *(アスタリスク)\n
                    任意の0文字以上の文字列\n
                    例:「apple」を含むファイルを表示したい場合 → 「1s*apple*」\n
                    · ?(クエスチョンマーク)\n
                    任意の1文字\n
                    例:「apple」の後に2文字書かれているファイルを表示したい場合→「1s apple ?? 」\n
                    · [](大括弧)\n
                    大括弧内のいずれかの文字を含むものを表示\n
                    直前に「!」を付けた場合は、大括弧内の文字を含まないものを表示\n
                    例:「apple」の後にAからzまでのアルファベットが含まれているファイルを表示したい場合 →「1s\n
                    apple [A-Z] ]\n
                    例:「apple」の後にAからzまでのアルファベットが含まれていないファイルを表示したい場合 →\n
                    '1s apple[ !A-z]]\n
                    上記のワイルドカードを組み合わせると、簡単に表示したいファイルを絞り込むことができます。\n
                    今回のワイルドカードでは、下記の条件を満たしている必要があります。\n
                    1.ピリオドの前に0文字以上の任意の文字列\n
                    2.ピリオドの後に「任意の一文字」がーつ\n
                    3.上記の後ろに0から8までの数字`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q17",
        prompt: `ファイルtestfileは現在、ユーザstudent が所有している。このファイルの所有者をteacher に変更したい\n
                場合、どのコマンドを実行すればよいか?なお、teacherのUID は500、studentのUID は501である。`,
        options: [
            { id: "q17o1", text: "chown student teacher testfile" },
            { id: "q17o2", text: "chown testfile student teacher" },
            { id: "q17o3", text: "chown teacher testfile" },
            { id: "q17o4", text: "chown -u 500 testfile" },
            { id: "q17o5", text: "chown testfile teacher" }
        ],
        correctOptionIds: ["q17o3"],
        explanation: `[解答]\n
                    chown teacher testfile\n\n
                    [解説]\n
                    chown commandの書式は次のとおり。\n
                    書式：chown [オプション] 所有者 ファイル/ディレクトリ`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q18",
        prompt: `/home/sakura/doc ディレクトリ以下のファイルの所有者は現在 sakura になっているが、そのディレクトリ\n
                以下の全ファイルの所有者を tomoyo に変更するにはどうすればよいか。`,
        options: [
            { id: "q18o1", text: "chown -d /home/sakura/doc Tomoyo" },
            { id: "q18o2", text: "chown -d tomoyo /home/sakura/doc" },
            { id: "q18o3", text: "chown tomoyo -d /home/sakura/doc" },
            { id: "q18o4", text: "chown tomoyo /home/sakura/doc" },
            { id: "q18o5", text: "chown -R tomoyo /home/sakura/doc" }
        ],
        correctOptionIds: ["q18o5"],
        explanation: `[解答]\n
                    chown -R tomoyo /home/sakura/doc\n\n
                    [解説]\n
                    -R オプションは、指定されたディレクトリ以下の全ファイルの所有者を再帰的に変更。書式は、\n
                    chown [オプション] user名[:group名] file/directory名\n
                    となる。なお、実際に所有者を変更できるのは スーパーユーザーだけ。`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q19",
        prompt: `カレントディレクトリが/var/www のとき、カレントディレクトリにあるhtml ディレクトリ配下すべてのパ\n
                ーミッションを一括で変更するコマンドを1つ選択してください。\n
                html ディレクトリ配下のすべてのディレクトリ·ファイルに対して、「所有グループ」の書き込み権限のみを追加\n
                する設定を行います。(他の対象者のパーミッションは変更しないこと)\n\n
                [/var/www]\n
                    $ ls -1\n
                    dr-xr-xr-x 2\n
                    root root 6 12 A 24 2019 cgi-bin\n
                    drwxr-x-x 5\n
                    root root 60 7月 21 10:23 html`,
        options: [
            { id: "q19o1", text: "chmod -R g+w html" },
            { id: "q19o2", text: "chmod -v o+r html" },
            { id: "q19o3", text: "chmod -cR u+x html" },
            { id: "q19o4", text: "chmod -fR 575 /var/www/html" }
        ],
        correctOptionIds: ["q19o1"],
        explanation: `[解答]\n
                    chmod -R g+w html\n\n
                    [解説]\n
                    ファイルやディレクトリにアクセスできるかどうかは、ファイルの「パーミッション」によって決まります。\n
                    パーミッションの確認は以下のコマンドで可能です。\n
                        ls -1, stat\n
                    ファイルやディレクトリのパーミッションは、「r」(読み込み)「w」(書き込み)「x」(実行)の3つのアルファベ\n
                    ットで表します。\n
                    パーミッションを与える対象は、所有者·所有グループ·その他で分けられます。\n
                    例題を例に、表記を見ていきます。\n
                        $ ls -1d html\n
                        drwxr-x -- x. 5 root root 60 7月 21 10:23 html\n
                    表示結果の「rwxr-x -- x」の部分がパーミッションを示しています。\n
                    先頭の「d」はディレクトリを示し、ファイルの場合は「-」となります。次の3文字が所有者、その後の3文字\n
                    が所有グループ、最後の3文字がその他に対するアクセス権限を示しています。\n
                    パーミッションを変更するコマンドは「chmod」になります。chmod でパーミッションを指定する際には二種類\n
                    の表記が存在します。\n
                    一つは「アルファベット」、もう一つは「数字」になります。\n
                    アルファベット\n
                    対象者を下記のように表記することができます。\n
                            所有者 =u\n
                            所有グループ =g\n
                            その他 =o\n
                    所有者に読み出し権限を追加する場合\n
                            →「chmod u+r 指定のディレクトリ又はファイル」\n
                    その他に実行権を削除する場合\n
                            →「chmod o-x 指定のディレクトリ又はファイル」\n
                    数字\n
                    パーミッションを下記のように表記することができます。\n
                            「r(読み出し)」=4\n
                            「w(書き込み)」=2\n
                            「x(実行)」=1\n
                            何も許可しない=0\n
                    上記の数字を足し算してパーミッションを指定することが可能です。\n
                    すべての対象者に読み出しと実行を許可する設定をするとき\n
                            →「chmod 555(対象者全てに4+1) 指定のディレクトリ又はファイル」\n
                        所有者のみにすべて許可するとき\n
                            →「chmod 700(所有者のみに4+2+1)指定のディレクトリ又はファイル」\n
                    -Rオプションを指定することで、指定ディレクトリ配下のファイルやディレクトリのパーミッションを\n
                    すべて変更できます。\n
                    構文は以下の通りです。\n
                    # chmod -R パーミッション内容 ディレクトリ名`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q20",
        prompt: `/etc/passwd ファイルに設定されているアクセス権として適切なものはどれか?`,
        options: [
            { id: "q20o1", text: "666" },
            { id: "q20o2", text: "644" },
            { id: "q20o3", text: "700" },
            { id: "q20o4", text: "400" },
            { id: "q20o5", text: "600" }
        ],
        correctOptionIds: ["q20o2"],
        explanation: `[解答]\n
                    644\n\n
                    [解説]\n
                    所有者(root)のみ読み書き可、それ以外のユーザは読み取りのみのアクセス権が設定される。root 以外のユー\n
                    ザにも読み取り権限が与えられていないとログイン後の環境に支障がでる。`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: "q21",
        prompt: `/link ディレクトリにアクセスすると/originディレクトリが参照できるよう、\n
                リンクを作成したい。どのコマンドを実行すればよいか。`,
        options: [
            { id: "q21o1", text: "ln /link /origin" },
            { id: "q21o2", text: "ln /origin /link" },
            { id: "q21o3", text: "ln -s /link /origin" },
            { id: "q21o4", text: "ln -s /origin /link" }
        ],
        correctOptionIds: ["q21o4"],
        explanation: `[解答]\n
                    ln -s /origin /link\n\n
                    [解説]\n
                    シンボリックリンクは、\n
                    ln -s <リンク元(実体)><リンク先>\n
                    で作成する。なお、ディレクトリのシンボリックリンクは作成できる、ディレクトリのハードリンクは作成できない。\n
                    また、別のファイルシステムへのリンクが作成できるのはシンボリックリンクだけである。`,
        meta: { category: "cb41", difficulty: "normal" },
    },
    {
        id: `q22`,
        prompt: `コマンドラインで\n
                $ man 5 passwd\n
                と入力した場合、結果として期待されるものはどれか?`,
        options: [
            { id: `q22o1`, text: `passwd コマンドのマニュアルページが表示される` },
            { id: `q22o2`, text: `passwd コマンドの簡単なヘルプが表示される` },
            { id: `q22o3`, text: `/etc/passwd ファイルのマニュアルページが表示される` },
            { id: `q22o4`, text: `エラーになる` }
        ],
        correctOptionIds: ["q22o3"],
        explanation: `[解答]\n
                    /etc/passwd ファイルのマニュアルページが表示される\n\n
                    [解説]\n
                    man コマンドでは、コマンドの直前にセクションを指定することができる。この問題の場合、セクションは 5が\n
                    指定されているため、passwd コマンドではなく、/etc/passwd ファイルのマニュアルが表示される。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q23`,
        prompt: `ping コマンドを使用したところ、パケットの送出が止まらず繰り返されている。どのような処置を取ればよいか?`,
        options: [
            { id: `q23o1`, text: `Ctrl + z キーを押す` },
            { id: `q23o2`, text: `Ctrl + C キーを押す` },
            { id: `q23o3`, text: `Ctrl + S キーを押す` },
            { id: `q23o4`, text: `Ctrl + Alt + Delete キーを押す` }
        ],
        correctOptionIds: ["q23o2"],
        explanation: `[解答]\n
                    Ctrl + C キーを押す\n\n
                    [解説]\n
                    Windows のping と違って、デフォルトでは「Ctrl+C」で停止するまでICMP パケットの送出は続く。-cオプ\n
                    ションで送信パケットの個数を指定できる。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q24`,
        prompt: `シェル変数の定義を確認したい場合、使用するコマンドを選択してください。`,
        options: [
            { id: `q24o1`, text: `env` },
            { id: `q24o2`, text: `export` },
            { id: `q24o3`, text: `set` },
            { id: `q24o4`, text: `expand` }
        ],
        correctOptionIds: ["q24o3"],
        explanation: `[解答]\n
                    set\n\n
                    [解説]\n
                    set コマンドを使用すると、シェル変数の設定の確認や変更を行うことができます。set コマンドでは、シェル変\n
                    数と環境変数、両方の一覧を表示することが可能です。\n
                    終了すると、シェル変数は失われます。\n
                    また、子プロセスからは親プロセスで定義したシェル変数を参照することはできません。\n
                    環境変数とは、その変数を定義したシェル上、およびそのシェルで実行されるプログラムすべてで有効な変数のことです。\n
                    シェル変数とは、その変数を定義したシェルとプロセスでのみ、有効な変数のことです。そのシェルやプロセスを\n
                    親プロセスの設定が子プロセスに引き継がれます。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q25`,
        prompt: `/etc/配下にある「httpd.conf」というファイルの場所を検索したい。検索できるコマンドで正しいものを選択してください。`,
        options: [
            { id: `q25o1`, text: `find /etc/ -name httpd.conf` },
            { id: `q25o2`, text: `find -name httpd.conf /etc/` },
            { id: `q25o3`, text: `find -name httpd.conf -dir /etc/` },
            { id: `q25o4`, text: `find /etc/ -type httpd.conf` }
        ],
        correctOptionIds: ["q25o1"],
        explanation: `[解答]\n
                    find /etc/ -name httpd.conf\n\n
                    [解説]\n
                    find コマンドは、指定したディレクトリ以下から検索条件にマッチするファイルやディレクトリを検索するコマ\n
                    ンドです。\n
                    find コマンドの書式は以下の通りです。\n
                    find [検索するパス][検索条件]\n

                    以下のような検索条件を指定することができます。\n
                    -name 検索ワード:ファイル名やディレクトリ名が一致しているものを検索します。\n
                        ワイルドカードを使用して部分一致で検索することも可能です。\n
                    -mtime 日数(※):ファイルの最終更新日時が指定した日数前のファイルを検索します。\n
                    -atime 日数(※):ファイルの最終アクセス日時が指定した日数前のファイルを検索します。\n
                    -type f:検索対象をファイルのみとし検索します。\n
                    -type d:検索対象をディレクトリのみとし検索します。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q26`,
        prompt: `次の選択肢の中で、/home/user/test.txt というファイルを/home/backup ディレクトリに移動できないコマンドを選択してください。`,
        options: [
            { id: `q26o1`, text: `mv -r /home/user/test.txt /home/backup/` },
            { id: `q26o2`, text: `mv -t /home/backup/ /home/user/test.txt` },
            { id: `q26o3`, text: `mv -i /home/user/test.txt /home/backup/` },
            { id: `q26o4`, text: `mv -n /home/user/test.txt /home/backup/` }
        ],
        correctOptionIds: ["q26o1"],
        explanation: `[解答]\n
                    mv -r /home/user/test.txt /home/backup/\n\n
                    [解説]\n
                    mv コマンドは、ファイルやディレクトリの移動や名前の変更を行うコマンドです。\n
                    書式は以下の通りです。\n
                        mv [OPTION] SOURCE DEST\n
                        SOURCE から DEST へ名前変更が行われます。\n
                        mv [OPTION] SOURCE DIRECTORY\n
                        SOURCE から DIRECTORY へ移動が行われます。\n
                        mv [OPTION] -t DIRECTORY SOURCE\n
                        SOURCE から DIRECTORY へ移動が行われます。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q27`,
        prompt: `インストール済みのパッケージをすべて表示できるdnf コマンドを、全て選択してください。`,
        options: [
            { id: `q27o1`, text: `dnf search installed` },
            { id: `q27o2`, text: `dnf list installed` },
            { id: `q27o3`, text: `dnf installed` },
            { id: `q27o4`, text: `dnf info installed` }
        ],
        correctOptionIds: ["q27o2"],
        explanation: `[解答]\n
                    dnf list installed\n\n
                    [解説]\n
                    dnf コマンドはパッケージ管理を行うためのコマンドです。\n
                    選択肢にあるサブコマンドは、それぞれ以下の通りです。\n
                        search :引数に指定したキーワードでパッケージ情報を検索する\n
                        info:利用可能なパッケージに関する説明と要約情報を一覧表示する\n
                        list :利用可能なパッケージに関するさまざまな情報を一覧表示する\n
                    info サブコマンドと、list サブコマンドは両方ともパッケージに関する情報を表示するサブコマンドですが、\n
                    info サプコマンドの方がより詳しい情報を表示することが可能です。\n
                    また、info サブコマンドとlist サブコマンドは、オプションを指定することで表示する情報を絞り込むことが\n
                    可能です。\n
                        dnf list/info (オプションなし)     :インストール可能なパッケージとインストール済みのパッケージ\n
                        dnf list/info installed :インストール済のパッケージ\n
                        dnf list/info available :リポジトリ内で利用可能なパッケージ\n
                        dnf list/info updates   :インストール済のパッケージでアップデート可能なパッケージ\n
                        dnf list/info extras    :システムにインストールされているが、リポジトリには存在しないパッケージ`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q28`,
        prompt: `/home/testuser/srcdir というディレクトリを、/tmpディレクトリにコピーしたい。srcdir ディレクトリ\n
                のタイムスタンプを変えずに、srcdir ディレクトリ配下のディレクトリやファイルも含めてコピーできるコマンドを一つ選択してください。`,
        options: [
            { id: `q28o1`, text: `cp -rp /home/testuser/srcdir /tmp/` },
            { id: `q28o2`, text: `cp -r /home/testuser/srcdir /tmp/` },
            { id: `q28o3`, text: `cp -i /home/testuser/srcdir /tmp/` },
            { id: `q28o4`, text: `cp -ri /home/testuser/srcdir /tmp/` }
        ],
        correctOptionIds: ["q28o1"],
        explanation: `[解答]\n
                    cp -rp /home/testuser/srcdir /tmp/\n\n
                    [解説]\n
                    cp コマンドは、ファイルやディレクトリのコピーを行うコマンドです。\n
                    書式は以下の通りです。\n
                    cp [オプション] SOURCE DEST\n
                    SOURCE から DEST へのコピーが行われます。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q29`,
        prompt: `以下のファイルから、重複している行を全て削除し、同一行は一行だけ表示することのできるコマンドを、すべて選択してください。\n
                test.txt\n
                    dog\n
                    cat\n
                    pig\n
                    pig\n
                    dog\n
                    dog`,
        options: [
            { id: `q29o1`, text: `sort -u test.txt` },
            { id: `q29o2`, text: `uniq test.txt` },
            { id: `q29o3`, text: `sort test.txt | uniq` },
            { id: `q29o4`, text: `cat test.txt | uniq` }
        ],
        correctOptionIds: ["q29o1", "q29o3"],
        explanation: `[解答]\n
                    sort -u test.txt\n
                    sort test.txt | uniq\n\n
                    [解説]\n
                    sort コマンドは、テキストファイルの行を並び替えるコマンドです。\n
                    オプションなしで実行した場合、文字コードの順番に並び替えを行い標準出力に結果を表示します。\n
                    sort コマンドには、並び替えに関するオプションなどを含む様々なオプションがあります。\n
                            -b, -- ignore-leading-blanks    先頭の空白を無視して並び替える\n
                            -f, -- ignore-case               大文字小文字区別せずに並び替える\n
                            -n, -- numeric-sort               文字列を数値と見なして並べ替える\n
                            -o, -- output=FILE                結果を出力するファイル名を指定する\n
                            -u, -- unique                     同一行は1つ目だけを出力する\n
                    uniq コマンドは、繰り返し行の出力や削除を行うコマンドです。オプションなしで実行した場合、連続する同じ\n
                    行が最初に見つけた行にまとめられます。uniq コマンドは、連続する行の比較を行うため、重複する行が離れた\n
                    場所にある場合、取り除くことはできません。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q30`,
        prompt: `test ユーザのホームディレクトリでコマンドを自作し、コマンドを実行しようとしたところ以下のエラーが表示された。\n
                    $ org_command\n
                    -bash: org_command: コマンドが見つかりません\n
                この時、どのディレクトリにいてもコマンドを実行できるようにする方法として適切なものを全て選択してください。\n
                ※実行権は設定されているものとします`,
        options: [
            { id: `q30o1`, text: `「$ printenv PATH」を実行する` },
            { id: `q30o2`, text: `環境変数 PATH に test ユーザのホームディレクトリを追加する` },
            { id: `q30o3`, text: `root 権限で実行する` },
            { id: `q30o4`, text: `コマンドの実行ファイルを絶対パスで指定する` }
        ],
        correctOptionIds: ["q30o2", "q30o4"],
        explanation: `[解答]\n
                    環境変数PATHにtestユーザのホームディレクトリを追加する\n
                    コマンド実行ファイルを絶対パスで指定する\n\n
                    [解説]\n
                    コマンドを実行するためには、そのコマンドの実行ファイルが配置されている場所を指定する必要があります。\n
                    ただし、環境変数 PATH に設定されているディレクトリ配下の実行ファイルは、自動的に検索されるため、\n
                    絶対パスで指定しなくても実行することができます。\n
                    環境変数 PATHに設定されているディレクトリは、echo コマンドを用いて確認することができます。\n
                            $ echo $PATH\n
                            /home/test/.local/bin:/home/test/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin\n
                    例えば、ls コマンドはコマンド名のみで実行が可能です。ls コマンドの絶対パスを調べると、[/usr/bin/ls]\n
                    と表示され、環境変数 PATH にある[/usr/bin]配下に実行ファイルがあることが分かります。\n
                            $ which ls\n
                            alias ls='ls --color=auto'\n
                                /usr/bin/ls\n
                    実行ファイルを配置しているディレクトリが環境変数PATH に設定されていない場合は、環境変数 PATH にディレ\n
                    クトリを追加することで、パスを指定しなくてもコマンドを実行できるようになります。この作業を「パスを通す」\n
                    といいます。\n
                    このことから、「2.環境変数PATH にtest ユーザのホームディレクトリを追加する」と、「4.コマンドの実行\n
                    ファイルを絶対パスで指定する」が正解となります。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q31`,
        prompt: `以下の内容が書かれたファイル(text.txt)を検索して、TEXT00 の後ろに続く文字が1~5の行を出力させる正\n
                しいコマンドを選択してください。\n
                text.txt\n
                    TEXT001\n
                    TEXT002\n
                    TEXT003\n
                    TEXT004\n
                    TEXT005\n
                    TEXT006\n
                    TEXT007\n
                    TEXT008\n
                    TEXT009\n
                    TEXT010`,
        options: [
            { id: `q31o1`, text: `grep \"TEXT00[1 5]\" text.txt` },
            { id: `q31o2`, text: `cat text.txt | grep [1-5]` },
            { id: `q31o3`, text: `cat text.txt | grep [12345]` },
            { id: `q31o4`, text: `grep \"TEXT00[1-5]\" text.txt` }
        ],
        correctOptionIds: ["q31o4"],
        explanation: `[解答]\n
                    grep "TEXT00[1-5]" text.txt\n\n
                    [解説]\n
                    []はカッコ内に入力されたいずれかの文字でマッチさせる正規表現です。以下のようにーと組み合わせることで範囲を指定して検索することができます。\n
                    範囲指定の一例\n
                    [0-9] : 数字の0から9にマッチする行を出力する\n
                    [a-z] : 英字のaからzにマッチする行を出力する\n
                    [A-Z] : 英字のAからZにマッチする行を出力する\n
                    [0-9a-z] : 数字の0から9と英字のaからzにマッチする行を出力する\n
                    [0-9A-Z] : 数字の0から9と英字のAからZにマッチする行を出力する\n
                    また、[]の中に並べて文字を入力することで、それぞれにマッチする行を出力することもできます。\n
                    [134] : 数字の1、3、4にマッチする行を出力する\n
                    [ace] : 英字のa、c、eにマッチする行を出力する`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q32`,
        prompt: `ログファイル「/var/log/message」への追記分を、リアルタイムに表示できるコマンドを選択してください。`,
        options: [
            { id: `q32o1`, text: `head -f /var/log/message` },
            { id: `q32o2`, text: `less /var/log/message` },
            { id: `q32o3`, text: `cat /var/log/message` },
            { id: `q32o4`, text: `tail -f /var/log/message` }
        ],
        correctOptionIds: ["q32o4"],
        explanation: `[解答]\n
                    tail -f /var/log/message\n\n
                    [解説]\n
                    tail コマンドは、ファイルの末尾から引数で指定された一部を出力するコマンドです。\n
                    デフォルトではファイルの末尾から10行分が出力されます。オプションを指定することで、出力する行数や文字\n
                    数を指定することもできます。\n
                    利用できる主なオプションは以下の通りです。\n
                    -c:引数に指定したバイト数を出力します\n
                    -n:引数に指定した行数を出力します\n
                    -f:ファイルに追記されたデータを出力します\n
                    -q:ファイル名を表示しません\n
                    -v:常にファイル名を表示します`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q33`,
        prompt: `/home/testuser/srcdirというディレクトリを、/tmpディレクトリにコピーしたい。\n
                srcdirディレクトリのタイムスタンプを変えずに、srcdir ディレクトリ配下のディレクトリやファイルも含め\n
                てコピーできるコマンドをーつ選択してください。`,
        options: [
            { id: `q33o1`, text: `cp -rp /home/testuser/srcdir /tmp/` },
            { id: `q33o2`, text: `cp -r /home/testuser/srcdir /tmp/` },
            { id: `q33o3`, text: `cp -i /home/testuser/srcdir /tmp/` },
            { id: `q33o4`, text: `cp -ri /home/testuser/srcdir /tmp/` }
        ],
        correctOptionIds: ["q33o1"],
        explanation: `[解答]\n
                    cp -rp /home/testuser/srcdir /tmp/\n\n
                    [解説]\n
                    cp コマンドは、ファイルやディレクトリのコピーを行うコマンドです。\n
                    書式は以下の通りです。\n
                        cp [オプション] SOURCE DEST\n
                        SOURCE から DEST へのコピーが行われます。\n
                    -r オプションを指定することで、サブディレクトリやファイルも含め、再帰的にディレクトリ全体をコピーする\n
                    ことができます。\n
                    また、-pオプションを指定することで、タイムスタンプもコピーすることができます。なお、ルートユーザで実\n
                    行した場合には、権限、所有者、所有グループもコピーすることができます。\n
                    オプションは、「-rp」のようにまとめて指定することが可能です。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q34`,
        prompt: `次の選択肢の中で、/home/user/test.txt というファイルを/home/backup ディレクトリに移動できないコ\n
                マンドを選択してください。`,
        options: [
            { id: `q34o1`, text: `mv -r /home/user/test.txt /home/backup/` },
            { id: `q34o2`, text: `mv -t /home/backup/ /home/user/test.txt` },
            { id: `q34o3`, text: `mv -i /home/user/test.txt /home/backup/` },
            { id: `q34o4`, text: `mv -n /home/user/test.txt /home/backup/` }
        ],
        correctOptionIds: ["q34o1"],
        explanation: `[解答]\n
                    mv -r /home/user/test.txt /home/backup/\n\n`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q35`,
        prompt: `リダイレクトについて適切な説明を選択してください。`,
        options: [
            { id: `q35o1`, text: `「cat く test.txt」は、標準出力をtest.txtに書き込んでいる` },
            { id: `q35o2`, text: `「 rm a.txt 2>test.txt」は、標準エラーをtest.txtに書き込んでいる` },
            { id: `q35o3`, text: `「 echo hello >test.txt」は、標準出力をtest.txtに書き込んでいる` },
            { id: `q35o4`, text: `「 ls > test.txt」は、標準出力をtest.txtに書き込んでいる` }
        ],
        correctOptionIds: ["q35o4"],
        explanation: `[解答]\n
                    「ls > test.txt」は、標準出力をtest.txtに書き込んでいる\n\n`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q36`,
        prompt: `以下のテキストファイル test.txt の中に書かれている「1evel」という文字をすべて「Level」に置き換える\n
                    ためのコマンドで正しいものを1つ選択してください。`,
        options: [
            { id: `q36o1`, text: `sed s/level/Level/ test.txt` },
            { id: `q36o2`, text: `sed s/level/Level/g test.txt` },
            { id: `q36o3`, text: `sed y/level/Level/ test.txt` },
            { id: `q36o4`, text: `sed y/level/Level/g test.txt` }
        ],
        correctOptionIds: ["q36o2"],
        explanation: `[解答]\n
                    sed s/level/Level/g test.txt\n\n`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q37`,
        prompt: `標準エラー出力のみをerror.txtに書き込むためのコマンドで正しいものを1つ選択してください。`,
        options: [
            { id: `q37o1`, text: `find / -name \`*.conf\` 2> error.txt` },
            { id: `q37o2`, text: `find / -name \`*.conf\` > error.txt` },
            { id: `q37o3`, text: `find / -name \`*.conf\` >> error.txt` },
            { id: `q37o4`, text: `find / -name \`*.conf\` > error.txt 2>&1` }
        ],
        correctOptionIds: ["q37o1"],
        explanation: `[解答]\n
                    find / -name "*.conf" 2> error.txt\n\n`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q38`,
        prompt: `Apache Web サーバを管理している。HTTP アクセスの失敗した記録を見るには、どのログファイルを参照すれば\n
                よいか?`,
        options: [
            { id: `q38o1`, text: `/var/log/messages` },
            { id: `q38o2`, text: `/var/log/xferlog` },
            { id: `q38o3`, text: `/var/log/secure` },
            { id: `q38o4`, text: `/var/log/httpd/access_log` },
            { id: `q38o5`, text: `/var/log/httpd/error_log` }
        ],
        correctOptionIds: ["q38o5"],
        explanation: `[解答]\n
                    /var/log/httpd/error_log\n\n`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q39`,
        prompt: `Apache の設定を行っている。ドキュメントルートディレクトリを/var/www/html に設定していたが、これを\n
                /var/newに変更するため、httpd.conf を書き換えた。\n
                その後プラウザからアクセスしてみたが、もとのドキュメントルート内のコンテンツが表示される。設定が正常に\n
                書き換えられているものとして、考えられる原因はどれか?(2つ選択)`,
        options: [
            { id: `q39o1`, text: `Apacheを再起動していない` },
            { id: `q39o2`, text: `/var/newのパーミッション設定に誤りがある` },
            { id: `q39o3`, text: `srm.confも合わせて書き換える必要がある` },
            { id: `q39o4`, text: `ブラウザのキャッシュが有効になっている` },
            { id: `q39o5`, text: `/varのパーミッション設定に誤りがある` }
        ],
        correctOptionIds: ["q39o1", "q39o4"],
        explanation: `[解答]\n
                    Apacheを再起動していない\n
                    ブラウザのキャッシュが有効になっている\n\n
                    [解説]\n
                    Apacheを再起動していない場合、設定が反映されません。また、ブラウザのキャッシュが有効になっていると、古いコンテンツが表示されることがあります。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q40`,
        prompt: `Apache HTTPD で、BASIC 認証によるアクセス制御を実施するため、.htaccess ファイルを編集している。以\n
                下は設定の一部である。空欄に当てはまるディレクティブはどれか?\n
                Basic\n
                AuthName "Restricted Area"\n
                AuthUserFile /etc/httpd/conf/.htpasswd`,
        options: [
            { id: `q40o1`, text: `AuthType` },
            { id: `q40o2`, text: `AccessFormat` },
            { id: `q40o3`, text: `AccessType` },
            { id: `q40o4`, text: `Require` },
            { id: `q40o5`, text: `AuthProto` }
        ],
        correctOptionIds: ["q40o1"],
        explanation: `[解答]\n
                    AuthType\n\n
                    [解説]\n
                    BASIC 認証を設定するためには、AuthType ディレクティブを使用して認証方式を指定する必要があります。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q41`,
        prompt: `ネットマスクの説明として間違っているものを選びなさい。`,
        options: [
            { id: `q41o1`, text: `ネットマスクは32ビットの値である` },
            { id: `q41o2`, text: `IPアドレスのうち、どこまでがネットワーク部にあたるかを表す` },
            { id: `q41o3`, text: `IPアドレスとOR演算を行うことでネットワークアドレスを算出できる` },
            { id: `q41o4`, text: `クラスCの標準的なネットマスクは24ビットである` },
        ],
        correctOptionIds: ["q41o1"],
        explanation: `[解答]\n
                IPアドレスとOR演算を行うことでネットワークアドレスを算出できる\n\n
                [解説]\n
                ネットマスクは、IPアドレスのネットワーク部を示すために使用される32ビットの値です。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q42`,
        prompt: `192.168.3.0 というネットワークで、サブネットマスクが255.255.255.128 であるとき、このネットワーク\n
                の最大ホスト数はいくつか?`,
        options: [
            { id: `q42o1`, text: `172` },
            { id: `q42o2`, text: `126` },
            { id: `q42o3`, text: `255` },
            { id: `q42o4`, text: `125` },
            { id: `q42o5`, text: `128` }
        ],
        correctOptionIds: ["q42o2"],
        explanation: `[解答]\n
                    126\n\n
                    [解説]\n
                    サブネットマスクが255.255.255.128 の場合、ホスト部は7ビットであるため、2^7 - 2 = 126 のホストアドレスが利用可能です。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q43`,
        prompt: `ネットワークアドレスが 192.168.4.32,サブネットマスクが255.255.255.240 のとき、コンピュータ等の\n
                機器に割り当ててはいけない IP アドレスはどれか?該当するものをすべて選択せよ。`,
        options: [
            { id: `q43o1`, text: `192.168.4.32` },
            { id: `q43o2`, text: `192.168.4.33` },
            { id: `q43o3`, text: `192.168.4.39` },
            { id: `q43o4`, text: `192.168.4.40` },
            { id: `q43o5`, text: `192.168.4.47` }
        ],
        correctOptionIds: ["q43o1", "q43o5"],
        explanation: `[解答]\n
                    192.168.4.47\n
                    192.168.4.32\n\n
                    [解説]\n
                    192.168.4.32 はネットワークアドレスであり、192.168.4.47 はブロードキャストアドレスであるため、\n
                    これらのアドレスはホストに割り当てることができません。`,
        meta: { category: `cb41`, difficulty: `normal` },
    },
    {
        id: `q44`,
        prompt: `IPアドレスが 172.16.124.160、サブネットマスクが 255.255.255.0 のホストがある。このホストが属す\n
                るネットワークのネットワークアドレスを表しているのはどれか?`,
        options: [
            { id: `q44o1`, text: `172` },
            { id: `q44o2`, text: `172.16.124.0` },
            { id: `q44o3`, text: `255.255.255.0` },
            { id: `q44o4`, text: `172.16.124.255` },
            { id: `q44o5`, text: `127.0.0.1` }
        ],
        correctOptionIds: ["q44o2"],
        explanation: `[解答]\n
                    172.16.124.0\n\n`,
        meta: { category: `cb41`, difficulty: `normal` },
    }
];
