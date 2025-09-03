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
        prompt: "viのコマンドモードでの操作に関して説明が正しいものを選択してください。",
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
        explanation: `[解説]\n
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
        explanation: `[解説]\n
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
        explanation: `[解説]\n
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
        explanation: `[解説]\n
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
        explanation: `[解説]\n
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
            { id: "q17o4", text: "chown teacher testfile" },
            { id: "q17o5", text: "chown testfile teacher" }
        ],
        correctOptionIds: ["q17o3"],
        explanation: `[解説]\n
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
        explanation: `[解説]\n
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
        explanation: `[解説]\n
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
        id: "q19",
        prompt: `/etc/passwd ファイルに設定されているアクセス権として適切なものはどれか?`,
        options: [
            { id: "q19o1", text: "666" },
            { id: "q19o2", text: "644" },
            { id: "q19o3", text: "700" },
            { id: "q19o4", text: "400" },
            { id: "q19o5", text: "600" }
        ],
        correctOptionIds: ["q19o2"],
        explanation: `[解説]\n
                    所有者(root)のみ読み書き可、それ以外のユーザは読み取りのみのアクセス権が設定される。root 以外のユー\n
                    ザにも読み取り権限が与えられていないとログイン後の環境に支障がでる。`,
        meta: { category: "cb41", difficulty: "normal" },
    },
];