/** ジョブデータ */
export interface IWork {
    /** タイトル */
    title : string;

    /** 時期 */
    date : string;

    /** 説明 */
    description : string[];

    /** サムネイル画像URL */
    thumbnailUrl : string;

    /** タグ */
    tags : string[];
}

/** ジョブデータ取得クラス */
export default class WorkData {

    /** ジョブデータ取得 */
    get() : IWork[] {
        let ret : IWork[] = [
            {
                title : '新製品企画会議',
                date : '2019年6月',
                description : [ 'ゴリラです。', 'ゴジラです。', 'ゴリラです。' ],
                thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg',
                tags : [ 'グラレコ', 'ゴリラ', 'ゴジラ', 'Sample1', 'Sample2' ]
            },
            {
                title : 'ライブイベントTシャツプリント柄デザイン',
                date : '2019年5月',
                description : [ 'ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。' ],
                thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg',
                tags : [ 'イラスト', 'ゴリラ', 'ゴジラ' ]
            },
            {
                title : 'イベントポスターデザイン',
                date : '2019年4月',
                description : [ '' ],
                thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg',
                tags : [ '' ]
            }
        ];

        for(let i = 0; i < 20; i++)
        {
            ret.push(
                {
                    title : `Sample${i}`,
                    date : '2018年1月 ～ 2018年12月',
                    description : [ 'サンプルです' ],
                    thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg',
                    tags : [ 'Sample1', `Sample${i + 3}` ]
                }
            );
        }

        return ret;
    }
}