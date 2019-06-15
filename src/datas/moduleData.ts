import tags, { tag } from './tagData';

/** 部品 */
export type module = {
    /** 部品名 */
    name : string,

    /** 説明 */
    description : string,

    /** タグ */
    tags : tag[],

    /** 画像URL */
    image : string
};

/** 部品一覧 */
const modules : module[] = [
    {
        name : 'テキスト',
        description : '任意のリッチテキストを表示するWebパーツです。表示内容をメンテナンスするにはWebパーツを配置しているページを編集する必要があるため、頻繁に内容を変更する運用には向きません。書式設定だけでなくリンクや簡単な表を記述することも可能です。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/テキスト.jpg'
    },
    {
        name : '画像',
        description : '任意の画像を表示するWebパーツです。表示する画像はOneDriveまたはSharePoint上に保管する必要がありますが、Webパーツを編集している最中に画像をアップロードさせてくれるので操作は簡単です。Webパーツの編集画面上でインターネット上からフリー素材を探してくることも可能ですが、選択した画像がサイトのドキュメント ライブラリに自動でアップロードされますので、ドキュメント ライブラリの用途を限定している場合には注意が必要です。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/画像.jpg'
    },
    {
        name : 'ファイルビューアー',
        description : 'OfficeファイルやPDFファイルの内容を画像として表示するWebパーツです。例えばExcelファイルでは、指定したシートやセル範囲の内容を表示させることができます。上の画像では、Excelで作成した座席表を表示させています。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/ファイルビューアー.jpg'
    },
    {
        name : 'リンク',
        description : '別のページやYoutubeなどへのリンクとそのプレビューを表示するWebパーツです。上の画像は3つのリンクWebパーツを配置した例で、上からSharePoint上のページを表示する例、インターネット上のページを表示する例、YouTubeのページを表示する例となっています。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/リンク.jpg'
    },
    {
        name : '埋め込み',
        description : '別のページをiFrameで表示するWebパーツです。SharePoint上のページを表示する際は、Office 365のスイートバーを省略するなど良い感じにやってくれるようです。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/埋め込み.jpg'
    },
    {
        name : '強調表示されたコンテンツ',
        description : 'サイト・ニュース・ファイルなどSharePointサイト内の情報を集約表示するWebパーツです。現在のサイト内だけでなく他のサイトを指定したりテナント全体を指定したりすることが可能で、サイトの構成に依存しない表示をすることができます。また、管理プロパティによる絞り込みもできますので、工夫次第で色々な情報を表示することができます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/強調表示されたコンテンツ.jpg'
    },
    {
        name : 'Bing地図',
        description : '指定した住所の地図を表示するWebパーツです。Bing Mapが表示されるので地図の拡大・縮小や移動なども行うことができます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/Bing地図.jpg'
    },
    {
        name : 'Microsoft Forms',
        description : 'Microsoft Formsで作成した回答フォームを表示するWebパーツです。このWebパーツ上で回答の送信が出来るので、SharePointサイト上にアンケートページを作成するなどの使い方ができます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/Microsoft Forms.jpg'
    },
    {
        name : 'Twitter',
        description : '指定したTwitterユーザーからのツイートやのタイムラインを表示するWebパーツです。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/Twitter.jpg'
    },
    {
        name : 'イベント',
        description : 'SharePointサイトの予定表リストに登録した予定を表示するWebパーツです。現在のサイト内のリストを指定したり、すべてのサイトから予定を集約表示したりすることができます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/イベント.jpg'
    },
    {
        name : 'カウントダウンタイマー',
        description : '指定した日時までのカウントダウンまたはカウントアップを表示するWebパーツです。タイトルと背景画像、リンク先も設定することができます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/カウントダウンタイマー.jpg'
    },
    {
        name : 'クイック グラフ',
        description : '棒グラフまたは円グラフを表示するWebパーツです。データはWebパーツに直接値を指定するか、サイト内のリストを指定することができます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/クイック グラフ.jpg'
    },
    {
        name : 'クイック リンク',
        description : 'リンクを表示するWebパーツです。リンク先はWebパーツのプロパティで指定します。タイル表示や一覧表示などいくつかのレイアウトを選択することが可能です。背景画像はアップロードしても良いですが、予め用意されたアイコンを選択することができるのでこれを利用するのがお勧めです。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/クイック リンク.jpg'
    },
    {
        name : 'グループ予定表',
        description : 'Office 365グループのOutlook予定表を表示するWebパーツです。任意のOffice 365グループを1つ選択することができます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/グループ予定表.jpg'
    },
    {
        name : 'コード スニペット',
        description : '言語を指定してコード例を掲載することができるWebパーツです。JavaScriptなど複数の言語を選択可能で、コメントなどの書式を判断して色付けをしてくれます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/コード スニペット.jpg'
    },
    {
        name : 'サイト',
        description : '複数のサイトを並べて表示するWebパーツです。固定のサイトを指定したり、ログイン中のユーザーがよく利用するサイトを表示したりすることができます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/サイト.jpg'
    },
    {
        name : 'アクティビティ',
        description : '現在のサイト内でよく利用されるコンテンツを自動で選択して表示するWebパーツです。一度に何件表示するかだけを設定するシンプルなパーツになっています。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/アクティビティ.jpg'
    },
    {
        name : 'ドキュメント',
        description : '現在のサイト内のドキュメント ライブラリとそのビューを１つずつ指定して表示するWebパーツです。「すべて表示」をクリックすると、このWebパーツで表示中のビュー画面に遷移します。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/ドキュメント.jpg'
    },
    {
        name : 'ニュース',
        description : '選択したサイトまたはテナント全体からニュースを集約して表示するWebパーツです。テナント全体の設定でなければこのWebパーツからニュースを投稿できますが、投稿先は常にこのサイトとなります。他のサイトのニュースを表示していたりするとややこしいです。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/ニュース.jpg'
    },
    {
        name : 'ヒーロー',
        description : 'タイトル・リンク・画像の組み合わせを最大5つ表示するWebパーツです。レイアウトは固定です。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/ヒーロー.jpg'
    },
    {
        name : 'ページのプロパティ',
        description : 'サイトに投稿したニュースまたはページのプロパティ（列）の値を表示するWebパーツです。既定の状態では表示できる列がタイトルしかありませんが、ページ ライブラリに列を追加すれば増えていきます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/ページのプロパティ.jpg'
    },
    {
        name : 'マークダウン',
        description : 'テキストを表示するWebパーツです。「テキスト」Webパーツとの違いは、書式をマークダウン（決められた記法）で設定することです。書き方はプロパティの編集画面から見られるので難しくはありません。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/マークダウン.jpg'
    },
    {
        name : 'ユーザー',
        description : '指定したユーザーの情報や紹介文を掲載するWebパーツです。レイアウトはシンプルなものから上記画像のようなカード型までいくかの中から選択できます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/ユーザー.jpg'
    },
    {
        name : 'リスト',
        description : 'サイト内のリストからビューを１つ選択して表示するWebパーツです。ビューそのまんまの見た目になりますので、画像左上のようなシンプルな表示も可能ですし、画像右下のように「ビューの書式設定」で手入れをした結果も表示できます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/リスト.jpg'
    },
    {
        name : 'リストのプロパティ',
        description : 'このページに配置した「リスト」Webパーツと接続し、そこで選択されたアイテムの情報を表示するWebパーツです。上記画像では左側が「リスト」で右側が「リストのプロパティ」です。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/リストのプロパティ.jpg'
    },
    {
        name : '画像ギャラリー',
        description : '固定またはライブラリ内の画像を表示するWebパーツです。レイアウトは上記画像のようなグリッド表示の他に、自動で切り替わるスライドショーなども選択できます。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/画像ギャラリー.jpg'
    },
    {
        name : '後のために保存',
        description : 'ページやニュースを「後のために保存」しておくと、このWebパーツ内に表示されます。表示件数のみを設定するシンプルなパーツです。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/後のために保存.jpg'
    },
    {
        name : '最近使ったドキュメント',
        description : 'ログイン中のユーザーが最近アクセスしたドキュメントを表示するWebパーツです。表示件数のみを設定するシンプルなパーツです。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/最近使ったドキュメント.jpg'
    },
    {
        name : '天気',
        description : '指定した地点の天気を表示するWebパーツです。ソースはMSN天気のようです。',
        tags : [tags.app.webpart, tags.function.native, tags.mode.modern, tags.template.communicationSite, tags.template.teamSite],
        image : '/modules/天気.jpg'
    },
];

export default modules;