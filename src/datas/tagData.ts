/** タグ */
export type tag = {
    /** タグ名 */
    name : string,

    /** 説明 */
    description : string
};

/** タグ一覧 */
const tags = {
    /** モード別 */
    mode : {
        /** モダン */
        modern : {
            name : 'モダン',
            description : 'SharePointモダン機能で利用可能です。'
        } as tag,
        /** クラシック */
        classic : {
            name : 'クラシック',
            description : 'SharePointクラシック機能で利用可能です。'
        } as tag
    },

    /** テンプレート別 */
    template : {
        /** チームサイト */
        teamSite :{
            name : 'チームサイト',
            description : 'チームサイトで利用可能です。'
        } as tag,
        /** コミュニケーションサイト */
        communicationSite : {
            name : 'コミュニケーションサイト',
            description : 'コミュニケーションサイトで利用可能です。'
        } as tag
    },
    
    /** 機能別 */
    function : {
        /** 標準機能 */
        native : {
            name : '標準機能',
            description : 'SharePoint標準機能です。'
        } as tag,
        /** 書式設定 */
        formatting : {
            name : '書式設定',
            description : '列の書式設定とビューの書式設定でカスタマイズしました。'
        } as tag,
        /** SPFx */
        spfx : {
            name : 'SPFx',
            description : 'SharePoint Frameworkで開発しました。'
        } as tag,
        /** Flow */
        flow : {
            name : 'Flow',
            description : 'Microsoft Flowで構築しました。'
        } as tag,
    },

    /** モノ別 */
    app : {
        /** Webパーツ */
        webpart : {
            name : 'Webパーツ',
            description : 'ページに配置するWebパーツです。'
        } as tag,
        /** アプリ */
        app : {
            name : 'アプリ',
            description : 'リストまたはライブラリです。'
        } as tag,
        /** ワークフロー */
        workflow : {
            name : 'ワークフロー',
            description : '業務ロジックです。'
        } as tag
    }
};

export default tags;