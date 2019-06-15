/** リンク */
export type link = {
    /** 画面名 */
    name : string,
    /** 説明 */
    description : string,
    /** 利用頻度 */
    level : 1 | 2 | 3 | 4 | 5,
    /** パス */
    path? : string,
    /** パス表示文字列 */
    pathDisp? : string,
    /** 既定で開くかどうか */
    opened? : boolean,
    /** サブリンク一覧 */
    subLinks? : link[]
}

/** システムページのパス */
const systemPath = '_layouts/15';

/** カタログページのパス */
const catalogPath = '_catalogs';

/** URL一覧 */
export function getLinks(domain : string, site : string) : link {
    return {
        name : 'サイト',
        description : '',
        level : 5,
        path : `${domain}${site}`,
        pathDisp : site,
        opened : true,
        subLinks : [
            {
                name : 'サイトの設定',
                description : 'このサイトの設定画面です。',
                level : 5,
                path : `${domain}${site}/${systemPath}/settings.aspx`,
                pathDisp : `${site}/${systemPath}/settings.aspx`,
                subLinks : [
                    {
                        name : 'ユーザーと権限',
                        description : '権限管理をするための機能郡です。',
                        level : 5,
                        subLinks : [
                            {
                                name : '権限',
                                description : '権限設定画面です。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/user.aspx`,
                                pathDisp : `${site}/${systemPath}/user.aspx`
                            },
                            {
                                name : 'ユーザーとグループ',
                                description : 'SharePointグループ内のユーザー一覧画面です。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/people.aspx`,
                                pathDisp : `${site}/${systemPath}/people.aspx`
                            },
                            {
                                name : 'グループ',
                                description : 'SharePointグループ一覧画面です。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/groups.aspx`,
                                pathDisp : `${site}/${systemPath}/groups.aspx`
                            },
                            {
                                name : 'すべてのユーザー',
                                description : 'ユーザー一覧画面です。SharePointグループを跨いですべて表示します。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/people.aspx?MembershipGroupId=0`,
                                pathDisp : `${site}/${systemPath}/people.aspx?MembershipGroupId=0`
                            },
                            {
                                name : 'アクセスの依頼と招待状',
                                description : '外部ユーザーの招待履歴です。',
                                level : 3,
                                path : `${domain}${site}/List/pendingreq.aspx?mbypass=1`,
                                pathDisp : `${site}/List/pendingreq.aspx?mbypass=1`
                            },
                            {
                                name : 'サイトコレクションの管理者',
                                description : 'このサイトコレクションの管理者を設定する画面です。サイトコレクション管理者は、「権限」画面で割り当てた権限によらず、このサイトに対するすべての権限を保有します。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/mngsiteadmin.aspx`,
                                pathDisp : `${site}/${systemPath}/mngsiteadmin.aspx`
                            },
                            {
                                name : 'サイト アプリの権限',
                                description : 'このサイトへのアクセス権を持つアプリを一覧する画面です。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/appprincipals.aspx?Scope=Web`,
                                pathDisp : `${site}/${systemPath}/appprincipals.aspx?Scope=Web`
                            }
                        ]
                    },
                    {
                        name : 'コンテンツ管理',
                        description : 'サイト内でデータ形式(= コンテンツタイプと列)の統一を図るための機能郡です。',
                        level : 5,
                        subLinks : [
                            {
                                name : 'サイト列',
                                description : 'このサイト内で共通利用する列を管理する画面です。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/mngfield.aspx`,
                                pathDisp : `${site}/${systemPath}/mngfield.aspx`
                            },
                            {
                                name : 'サイト コンテンツ タイプ',
                                description : 'このサイト内で共通利用するコンテンツ タイプを管理する画面です。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/mngctype.aspx`,
                                pathDisp : `${site}/${systemPath}/mngctype.aspx`
                            },
                        ]
                    },
                    {
                        name : 'カスタマイズ管理(クラシック)',
                        description : 'クラシック機能でのカスタマイズ用モジュールを管理するための機能郡です。',
                        level : 3,
                        subLinks : [
                            {
                                name : 'Webパーツ ギャラリー',
                                description : 'Webパーツを管理する画面です。実際には1つのライブラリになっているためビューの変更など多少の設定変更が可能です。',
                                level : 3,
                                path : `${domain}${site}/${catalogPath}/wp`,
                                pathDisp : `${site}/${catalogPath}/wp`
                            },
                            {
                                name : 'リストテンプレート ギャラリー',
                                description : 'リストテンプレートを管理する画面です。実際には1つのライブラリになっているためビューの変更など多少の設定変更が可能です。',
                                level : 3,
                                path : `${domain}${site}/${catalogPath}/lt`,
                                pathDisp : `${site}/${catalogPath}/lt`
                            },
                            {
                                name : 'マスター ページ ギャラリー',
                                description : 'マスターページ、テーマ、表示テンプレートなどを管理する画面です。実際には1つのライブラリになっているためビューの変更など多少の設定変更が可能です。',
                                level : 3,
                                path : `${domain}${site}/${catalogPath}/masterpage`,
                                pathDisp : `${site}/${catalogPath}/masterpage`
                            },
                            {
                                name : 'テーマ ギャラリー',
                                description : 'テーマを管理する画面です。実際には1つのライブラリになっているためビューの変更など多少の設定変更が可能です。',
                                level : 3,
                                path : `${domain}${site}/${catalogPath}/theme`,
                                pathDisp : `${site}/${catalogPath}/theme`
                            },
                            {
                                name : 'ソリューション ギャラリー',
                                description : '開発したソリューションを管理する画面です。クラシック機能の「サイト テンプレート」もここに保管します。実際には1つのライブラリになっているためビューの変更など多少の設定変更が可能です。',
                                level : 3,
                                path : `${domain}${site}/${catalogPath}/solutions`,
                                pathDisp : `${site}/${catalogPath}/solutions`
                            },
                            {
                                name : '構成済みの外観',
                                description : 'マスターページとテーマを組み合わせて「概観」として保管します。ここに保管した「概観」は、クラシックな「概観の変更」機能の選択肢となります。実際には1つのリストになっているためビューの変更など多少の設定変更が可能です。',
                                level : 3,
                                path : `${domain}${site}/${catalogPath}/design`,
                                pathDisp : `${site}/${catalogPath}/design`
                            }
                        ]
                    },
                    {
                        name : '検索',
                        description : 'このサイトの検索設定を管理するための機能群です。',
                        level : 5,
                        subLinks : [
                            {
                                name : '検索先の管理',
                                description : 'SharePointのクラシックな検索機能での検索先を設定する画面です。もう使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/manageresultsources.aspx?level=site`,
                                pathDisp : `${site}/${systemPath}/manageresultsources.aspx?level=site`
                            },
                            {
                                name : '検索結果の種類の管理',
                                description : 'SharePointのクラシックな検索機能で、検索結果を分類して表示テンプレートを割り当てる画面です。もう使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/manageresulttypes.aspx?level=site`,
                                pathDisp : `${site}/${systemPath}/manageresulttypes.aspx?level=site`
                            },
                            {
                                name : 'クエリ ルールの管理',
                                description : 'SharePointのクラシックな検索機能で、特定の検索結果を優先的に表示したりブロックしたりする画面です。もう使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/listqueryrules.aspx?level=site`,
                                pathDisp : `${site}/${systemPath}/listqueryrules.aspx?level=site`
                            },
                            {
                                name : '管理プロパティ',
                                description : 'SharePointの検索インデックスを管理する画面です。モダン機能でも管理プロパティを使う場面があるのでまだまだ現役ですが、「サイトの設定」画面からリンクできるこの画面では管理プロパティの編集が行えません。(閲覧専用の画面です。) 編集操作はSharePoint管理センターから行います。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/listmanagedproperties.aspx?level=site`,
                                pathDisp : `${site}/${systemPath}/listmanagedproperties.aspx?level=site`
                            },
                            {
                                name : '検索の設定',
                                description : 'SharePointのクラシックな検索機能で、検索画面のURLを指定するための画面です。もう使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/enhancedSearch.aspx?level=site`,
                                pathDisp : `${site}/${systemPath}/enhancedSearch.aspx?level=site`
                            },
                            {
                                name : '検索とオフラインでの使用制限',
                                description : 'このサイト内のコンテンツを検索結果に表示するかどうかを設定する画面です。検索に当てないサイトとかあるんでしょうか？私は使ったことがありません。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/srchvis.aspx`,
                                pathDisp : `${site}/${systemPath}/srchvis.aspx`
                            },
                            {
                                name : '検索の構成をインポート',
                                description : '「検索の構成をエクスポート」機能で出力した設定情報をインポートする画面です。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/importsearchconfiguration.aspx?level=site`,
                                pathDisp : `${site}/${systemPath}/importsearchconfiguration.aspx?level=site`
                            },
                            {
                                name : '検索の構成をエクスポート',
                                description : '現在のサイトの検索設定をXMLファイルに出力する機能です。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/exportsearchconfiguration.aspx?level=site`,
                                pathDisp : `${site}/${systemPath}/exportsearchconfiguration.aspx?level=site`
                            }
                        ]
                    },
                    {
                        name : '外観',
                        description : 'このサイトのデザインを管理するための機能群です。',
                        level : 5,
                        subLinks : [
                            {
                                name : 'デザイン マネージャー',
                                description : 'デバイス チャネルとマスター ページ、表示テンプレートなどを組み合わせて独自の「デザイン」を作る画面です。覚えることが多くて難易度が高い割にモダン機能では利用できません。今後使うことはない・・と、思います。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/DesignWelcomePage.aspx`,
                                pathDisp : `${site}/${systemPath}/DesignWelcomePage.aspx`
                            },
                            {
                                name : 'サイト マスター ページの設定',
                                description : 'このサイトに適用するマスター ページを設定する画面です。クラシック機能でしか利用できません。今後使うことはない・・と、思います。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/ChangeSiteMasterPage.aspx`,
                                pathDisp : `${site}/${systemPath}/ChangeSiteMasterPage.aspx`
                            },
                            {
                                name : 'タイトル、説明、ロゴ',
                                description : 'このサイトのサイト名、説明、ロゴを設定する画面です。モダン機能ではわざわざこの画面を使わなくても右上の歯車マーク > サイトの情報 リンクから実行できますので、今後使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/prjsetng.aspx`,
                                pathDisp : `${site}/${systemPath}/prjsetng.aspx`
                            },
                            {
                                name : 'ページ レイアウトとサイト テンプレートの設定',
                                description : 'このサイトのサブサイトを作る時に利用できるサイト テンプレートを限定したり、このサイトにページを追加する時の既定のページ レイアウトを変更したりする画面です。クラシック機能でしか利用できないため、今後使うことはない・・と、思います。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/AreaTemplateSettings.aspx`,
                                pathDisp : `${site}/${systemPath}/AreaTemplateSettings.aspx`
                            },
                            {
                                name : 'サイトのウェルカム ページ',
                                description : 'このサイトにアクセスした時に最初に表示される画面を設定します。この画面を使わなくても、ページ ライブラリのビューから実行できる内容です。今後使うことはない・・と、思います。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/AreaWelcomePage.aspx`,
                                pathDisp : `${site}/${systemPath}/AreaWelcomePage.aspx`
                            },
                            {
                                name : 'デバイス チャネル',
                                description : 'アクセス元端末のユーザーエージェント文字列毎に表示を切り替えるための規則を管理する画面です。クラシック機能でしか利用できません。今後使うことはない・・と、思います。',
                                level : 1,
                                path : `${domain}${site}/DeviceChannels`,
                                pathDisp : `${site}/DeviceChannels`
                            },
                            {
                                name : 'ナビゲーションの要素',
                                description : 'サイドリンクバーの表示を切り替える画面です。モダンのサイト テンプレートを使用しているサイトではリンクが表示されませんが、この画面のURLに直接アクセスすれば機能します。モダン機能を利用し、かつサイド リンクバーは要らないなっていう時にはまだ使える機能です。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/navoptions.aspx`,
                                pathDisp : `${site}/${systemPath}/navoptions.aspx`
                            },
                            {
                                name : '外観の変更',
                                description : 'このサイトの外観を切り替える画面です。ここで言う「外観」はクラシック機能限定のものを指しており、モダン機能の「外観」とは異なるようです。クラシック機能ではよく利用していましたが、今後使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/designgallery.aspx`,
                                pathDisp : `${site}/${systemPath}/designgallery.aspx`
                            },
                            {
                                name : 'デザイン パッケージのインポート',
                                description : 'クラシック機能の「デザイン」をこのサイトに取り込むための画面です。今後使うことはない・・と、思います。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/DesignPackageInstall.aspx`,
                                pathDisp : `${site}/${systemPath}/DesignPackageInstall.aspx`
                            },
                            {
                                name : 'ナビゲーションの設定',
                                description : 'トップリンクバーとサイドリンクバーを設定する画面です。クラシック機能では利用していましたが、モダン機能ではこの画面を使わなくても直接リンク先を設定できます。今後使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/AreaNavigationSettings.aspx`,
                                pathDisp : `${site}/${systemPath}/AreaNavigationSettings.aspx`
                            },
                            {
                                name : 'イメージ表示',
                                description : 'サイト内で画像をプレビュー表示するための表示テンプレートを管理する画面です。モダン機能では利用できないため、今後使うことはない・・と、思います。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/ImageRenditionSettings.aspx`,
                                pathDisp : `${site}/${systemPath}/ImageRenditionSettings.aspx`
                            }
                        ]
                    },
                    {
                        name : 'サイトの操作',
                        description : 'その他のサイト設定機能群です。',
                        level : 5,
                        subLinks : [
                            {
                                name : 'サイトの機能',
                                description : 'このサイトでの機能の有効化/無効化を行う画面です。モダン機能では今のところ利用する場面が少ないです。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/ManageFeatures.aspx`,
                                pathDisp : `${site}/${systemPath}/ManageFeatures.aspx`
                            },
                            {
                                name : 'サイト定義バージョンへのページのリセット',
                                description : '特定のページまたは全ページをサイト作成直後の状態に戻すための画面です。そもそもページはバージョン管理されていると思いますので、ページ ライブラリの機能でバージョンを戻せば良いことです。あまり使うことはない・・と、思います。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/reghost.aspx`,
                                pathDisp : `${site}/${systemPath}/reghost.aspx`
                            }
                        ]
                    },
                    {
                        name : 'サイトの管理',
                        description : 'その他のサイト設定機能群です。',
                        level : 5,
                        subLinks : [
                            {
                                name : '地域の設定',
                                description : 'このサイトのタイムゾーンを管理する画面です。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/regionalsetng.aspx`,
                                pathDisp : `${site}/${systemPath}/regionalsetng.aspx`
                            },
                            {
                                name : '言語設定',
                                description : 'このサイトの言語を管理する画面です。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/muisetng.aspx`,
                                pathDisp : `${site}/${systemPath}/muisetng.aspx`
                            },
                            {
                                name : '翻訳のエクスポート',
                                description : '言語設定で多言語対応をしても、サイト名などの設定値は翻訳されません。翻訳のエクスポートとインポートの機能を利用して、言語毎の設定値を登録します。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/exporttranslations.aspx`,
                                pathDisp : `${site}/${systemPath}/exporttranslations.aspx`
                            },
                            {
                                name : '翻訳のインポート',
                                description : '言語設定で多言語対応をしても、サイト名などの設定値は翻訳されません。翻訳のエクスポートとインポートの機能を利用して、言語毎の設定値を登録します。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/importtranslations.aspx`,
                                pathDisp : `${site}/${systemPath}/importtranslations.aspx`
                            },
                            {
                                name : 'サイトのライブラリとリスト',
                                description : 'このサイト内のライブラリとリストを一覧する画面です。この画面から各ライブラリ・リストの設定画面にリンクすることができます。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/mcontent.aspx`,
                                pathDisp : `${site}/${systemPath}/mcontent.aspx`
                            },
                            {
                                name : 'ユーザー通知',
                                description : 'ユーザー向けの通知を設定する画面ですが、現在は利用できません。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/sitesubs.aspx`,
                                pathDisp : `${site}/${systemPath}/sitesubs.aspx`
                            },
                            {
                                name : 'RSS',
                                description : 'このサイトがRSSフィードを公開するかどうかを設定する画面です。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/siterss.aspx`,
                                pathDisp : `${site}/${systemPath}/siterss.aspx`
                            },
                            {
                                name : 'サイトとワークスペース',
                                description : 'サブサイトを一覧する画面です。サブサイトはここで見なくてもサイト コンテンツの画面で見られるのでほとんど使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/mngsubwebs.aspx`,
                                pathDisp : `${site}/${systemPath}/mngsubwebs.aspx`
                            },
                            {
                                name : 'ワークフロー設定',
                                description : 'このサイトに紐づくサイト ワークフローの設定画面です。ここでの「ワークフロー」は、SharePoint Designerで作成するものを指しています。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/wrksetng.aspx`,
                                pathDisp : `${site}/${systemPath}/wrksetng.aspx`
                            },
                            {
                                name : 'サイトのクローズと削除',
                                description : '情報管理ポリシーに従って、一定期間後にサイトを自動削除する設定を行う画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/ProjectPolicyAndLifecycle.aspx`,
                                pathDisp : `${site}/${systemPath}/ProjectPolicyAndLifecycle.aspx`
                            },
                            {
                                name : '発行サイトの出力キャッシュの設定',
                                description : '出力キャッシュの設定を行う画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/areacachesettings.aspx`,
                                pathDisp : `${site}/${systemPath}/areacachesettings.aspx`
                            },
                            {
                                name : '用語ストアの管理ツール',
                                description : '用語ストアの管理を行う画面です。用語ストアは、列の種類が「管理されたメタデータ」になっている列の選択肢として利用します。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/termstoremanager.aspx`,
                                pathDisp : `${site}/${systemPath}/termstoremanager.aspx`
                            },
                            {
                                name : '人気の傾向',
                                description : '現在は利用できません。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/Reporting.aspx?Category=AnalyticsSite`,
                                pathDisp : `${site}/${systemPath}/Reporting.aspx?Category=AnalyticsSite`
                            },
                            {
                                name : 'カタログ接続の管理',
                                description : 'クラシックな発行サイトをカタログに接続する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/AddCatalogSource.aspx`,
                                pathDisp : `${site}/${systemPath}/AddCatalogSource.aspx`
                            },
                            {
                                name : 'サイト バリエーション',
                                description : 'このサイトのバリエーション機能を設定する画面です。バリエーション機能を利用すると、ルートサイトに投稿したコンテンツが言語毎のサブサイトにコピーされるようになります。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/VariationsSiteSettings.aspx`,
                                pathDisp : `${site}/${systemPath}/VariationsSiteSettings.aspx`
                            },
                            {
                                name : '翻訳の状態',
                                description : 'バリエーション機能と併せて利用します。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/Translation%20Status`,
                                pathDisp : `${site}/Translation Status`
                            }
                        ]
                    },
                    {
                        name : 'サイト コレクションの管理',
                        description : 'このサイト コレクションを管理するための機能群です。',
                        level : 5,
                        subLinks : [
                            {
                                name : 'ごみ箱',
                                description : 'サイト コレクションレベルのごみ箱です。サイトレベルのごみ箱から削除したものはここに入っています。この画面から削除したものは復元できません。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/AdminRecycleBin.aspx`,
                                pathDisp : `${site}/${systemPath}/AdminRecycleBin.aspx`
                            },
                            {
                                name : '検索先の管理',
                                description : 'SharePointのクラシックな検索機能での検索先を設定する画面です。もう使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/manageresultsources.aspx?level=sitecol`,
                                pathDisp : `${site}/${systemPath}/manageresultsources.aspx?level=sitecol`
                            },
                            {
                                name : '検索結果の種類の管理',
                                description : 'SharePointのクラシックな検索機能で、検索結果を分類して表示テンプレートを割り当てる画面です。もう使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/manageresulttypes.aspx?level=sitecol`,
                                pathDisp : `${site}/${systemPath}/manageresulttypes.aspx?level=sitecol`
                            },
                            {
                                name : 'クエリ ルールの管理',
                                description : 'SharePointのクラシックな検索機能で、特定の検索結果を優先的に表示したりブロックしたりする画面です。もう使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/listqueryrules.aspx?level=sitecol`,
                                pathDisp : `${site}/${systemPath}/listqueryrules.aspx?level=sitecol`
                            },
                            {
                                name : '管理プロパティ ',
                                description : 'SharePointの検索インデックスを管理する画面です。モダン機能でも管理プロパティを使う場面があるのでまだまだ現役ですが、「サイトの設定」画面からリンクできるこの画面では管理プロパティの編集が行えません。(閲覧専用の画面です。) 編集操作はSharePoint管理センターから行います。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/listmanagedproperties.aspx?level=sitecol`,
                                pathDisp : `${site}/${systemPath}/listmanagedproperties.aspx?level=sitecol`
                            },
                            {
                                name : '検索の設定',
                                description : 'SharePointのクラシックな検索機能で、検索画面のURLを指定するための画面です。もう使うことはない・・と、思います。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/enhancedSearch.aspx?level=sitecol`,
                                pathDisp : `${site}/${systemPath}/enhancedSearch.aspx?level=sitecol`
                            },
                            {
                                name : '検索の構成をインポート',
                                description : '「検索の構成をエクスポート」機能で出力した設定情報をインポートする画面です。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/importsearchconfiguration.aspx?level=sitecol`,
                                pathDisp : `${site}/${systemPath}/importsearchconfiguration.aspx?level=sitecol`
                            },
                            {
                                name : '検索の構成をエクスポート',
                                description : '現在のサイトコレクションの検索設定をXMLファイルに出力する機能です。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/exportsearchconfiguration.aspx?level=sitecol`,
                                pathDisp : `${site}/${systemPath}/exportsearchconfiguration.aspx?level=sitecol`
                            },
                            {
                                name : 'サイト コレクションの機能',
                                description : 'このサイト コレクションでの機能の有効化/無効化を行う画面です。モダン機能では今のところ利用する場面が少ないです。',
                                level : 3,
                                path : `${domain}${site}/${systemPath}/ManageFeatures.aspx?Scope=Site`,
                                pathDisp : `${site}/${systemPath}/ManageFeatures.aspx?Scope=Site`
                            },
                            {
                                name : 'サイト階層',
                                description : 'このサイト コレクション内のサブサイトをすべて表示する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/vsubwebs.aspx`,
                                pathDisp : `${site}/${systemPath}/vsubwebs.aspx`
                            },
                            {
                                name : 'ナビゲーションの設定',
                                description : 'サイト コレクションのナビゲーションを設定する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/SiteNavigationSettings.aspx`,
                                pathDisp : `${site}/${systemPath}/SiteNavigationSettings.aspx`
                            },
                            {
                                name : '監査設定の構成',
                                description : '監査ログを設定する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/AuditSettings.aspx`,
                                pathDisp : `${site}/${systemPath}/AuditSettings.aspx`
                            },
                            {
                                name : '監査 のレポートの表示',
                                description : '監査ログのレポートを表示する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/Reporting.aspx?Category=Auditing`,
                                pathDisp : `${site}/${systemPath}/Reporting.aspx?Category=Auditing`
                            },
                            {
                                name : 'ポータル サイト接続',
                                description : 'ポータルサイトへの接続を設定する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/portal.aspx`,
                                pathDisp : `${site}/${systemPath}/portal.aspx`
                            },
                            {
                                name : 'ポリシー',
                                description : '情報管理ポリシーを管理する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/Policylist.aspx`,
                                pathDisp : `${site}/${systemPath}/Policylist.aspx`
                            },
                            {
                                name : '記憶域メトリックス',
                                description : 'フォルダ毎の合計ファイルサイズを確認する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/storman.aspx`,
                                pathDisp : `${site}/${systemPath}/storman.aspx`
                            },
                            {
                                name : 'サイト コレクションのアプリの権限',
                                description : 'このサイト コレクションへのアクセス権を持つアプリを一覧する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/appprincipals.aspx`,
                                pathDisp : `${site}/${systemPath}/appprincipals.aspx`
                            },
                            {
                                name : 'サイト ポリシー',
                                description : '情報管理ポリシーを管理する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/ProjectPolicies.aspx`,
                                pathDisp : `${site}/${systemPath}/ProjectPolicies.aspx`
                            },
                            {
                                name : '利用状況 のレポートの表示',
                                description : '監査ログのレポートを表示する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/Reporting.aspx?Category=AnalyticsSiteCollection`,
                                pathDisp : `${site}/${systemPath}/Reporting.aspx?Category=AnalyticsSiteCollection`
                            },
                            {
                                name : 'コンテンツ タイプの発行ハブ',
                                description : 'コンテンツ タイプ ハブサイトにリンクする画面です。コンテンツ タイプ ハブサイトは特殊なSharePointサイトで、テナント全体に共通のコンテンツ タイプを提供することができます。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/contenttypesyndicationhubs.aspx`,
                                pathDisp : `${site}/${systemPath}/contenttypesyndicationhubs.aspx`
                            },
                            {
                                name : '出力キャッシュの設定',
                                description : 'サイト全体のキャッシュを設定する画面です。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/sitecachesettings.aspx`,
                                pathDisp : `${site}/${systemPath}/sitecachesettings.aspx`
                            },
                            {
                                name : 'バリエーション設定',
                                description : 'このサイト コレクションのバリエーション機能を設定する画面です。バリエーション機能を利用すると、ルートサイトに投稿したコンテンツが言語毎のサブサイトにコピーされるようになります。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/VariationSettings.aspx`,
                                pathDisp : `${site}/${systemPath}/VariationSettings.aspx`
                            },
                            {
                                name : 'バリエーション ラベル',
                                description : 'バリエーション機能と併せて利用します。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/VariationLabels.aspx`,
                                pathDisp : `${site}/${systemPath}/VariationLabels.aspx`
                            },
                            {
                                name : '翻訳可能な列',
                                description : 'バリエーション機能と併せて利用します。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/SiteTranslatableColumns.aspx`,
                                pathDisp : `${site}/${systemPath}/SiteTranslatableColumns.aspx`
                            },
                            {
                                name : 'バリエーションのログ ',
                                description : 'バリエーション機能と併せて利用します。使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/VariationLogs.aspx`,
                                pathDisp : `${site}/${systemPath}/VariationLogs.aspx`
                            },
                            {
                                name : '推奨されるコンテンツ ブラウザーの場所',
                                description : '使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/PublishedLinks`,
                                pathDisp : `${site}/PublishedLinks`
                            },
                            {
                                name : 'HTML フィールドのセキュリティ',
                                description : 'このサイト コレクション内のページにiFrameで埋め込むことができるページのドメインを列挙する画面です。モダン機能の「埋め込み」Webパーツを利用する際に設定が必要になります。',
                                level : 5,
                                path : `${domain}${site}/${systemPath}/HtmlFieldSecurity.aspx`,
                                pathDisp : `${site}/${systemPath}/HtmlFieldSecurity.aspx`
                            },
                            {
                                name : 'サイト コレクションの正常性チェック',
                                description : '使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/sitehealthcheck.aspx`,
                                pathDisp : `${site}/${systemPath}/sitehealthcheck.aspx`
                            },
                            {
                                name : 'サイト コレクションのアップグレード',
                                description : '使わないでしょう。',
                                level : 1,
                                path : `${domain}${site}/${systemPath}/siteupgrade.aspx`,
                                pathDisp : `${site}/${systemPath}/siteupgrade.aspx`
                            }
                        ]
                    }
                ]
            }
        ]
    };
}