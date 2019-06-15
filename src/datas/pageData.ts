/** ページ */
type page = {
    /** 相対パス */
    path : string,
    /** 名称 */
    name : string
}

/** ページ一覧 */
const pages = {
    /** 玄関 */
    home : {
        path :  '/',
        name : '玄関'
    } as page,

    /** ショーケース */
    showCase : {
        path :  '/showCase',
        name : 'ショーケース'
    } as page,

    /** ショーケース詳細 */
    showCaseDetail : {
        path :  '/showCaseDetail',
        name : 'ショーケース詳細'
    } as page,

    /** リンク生成部屋 */
    linkGenerator : {
        path :  '/linkGenerator',
        name : 'リンク生成部屋'
    } as page,
}

export default pages;