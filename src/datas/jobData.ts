/** ジョブデータ */
export interface IJob {
    /** タイトル */
    title : string;

    /** 説明 */
    description : string[];

    /** サムネイル画像URL */
    thumbnailUrl : string;
}

/** ジョブデータ取得クラス */
export default class JobData {

    /** ジョブデータ取得 */
    get() : IJob[] {
        return [
            {
                title : 'グラフィックレコーダー',
                description : [ 'ゴリラです。', 'ゴリラです。', 'ゴリラです。' ],
                thumbnailUrl : 'https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/catSmall.jpg?alt=media&token=dac25bec-7207-4a59-bedb-3d6b5cb719cd'
            },
            {
                title : 'イラストレーター',
                description : [ 'ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。' ],
                thumbnailUrl : 'https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/catBig.jpg?alt=media&token=f12d00f6-7f33-4f03-b7eb-619377a48498'
            },
            {
                title : 'アイディアスケッチ',
                description : [ 'ゴリラです。', 'ゴリラです。', 'ゴリラです。' ],
                thumbnailUrl : 'https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/catBig2.jpg?alt=media&token=17aff910-222f-4080-96c1-dc85c90fa8b8'
            }
        ];
    }
}