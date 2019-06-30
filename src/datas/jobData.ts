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
                thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg'
            },
            {
                title : 'イラストレーター',
                description : [ 'ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。' ],
                thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg'
            },
            {
                title : 'アイディアスケッチ',
                description : [ '' ],
                thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg'
            }
        ];
    }
}