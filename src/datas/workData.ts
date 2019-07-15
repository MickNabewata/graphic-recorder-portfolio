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
                description : [ 'ゴリラです。', 'ゴジラです。', 'ゴリラです。', 'ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。ゴジラは強いです。' ],
                thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg',
                tags : [ 'ゴリラ', 'ゴジラ', '', 'グラフィックレコーダー', 'つよつよつよつよつよつよつよつよつよつよつよつよつよつよつよつよつよつよつよつよつよつよつよつよ', 'Sample1', 'Sample2', 'Sample3', 'Sample4', 'Sample5', 'Sample6', 'Sample7', 'Sample8' ]
            },
            {
                title : 'ライブイベントTシャツプリント柄デザイン',
                date : '2019年5月',
                description : [ 'ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。ゴリラです。' ],
                thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg',
                tags : [ 'ゴリラ', '', '', 'イラストレーター' ]
            },
            {
                title : 'イベントポスターデザイン',
                date : '2019年4月',
                description : [ '' ],
                thumbnailUrl : 'https://2.bp.blogspot.com/-KK0qDJEicKI/UMluuXl6NJI/AAAAAAAABuE/E4k6X69EX-s/s1600/Silverback+Gorilla+Wildlife.jpg',
                tags : [ '' ]
            }
        ];

        for(let i = 0; i < 3; i++)
        {
            ret.push(
                {
                    title : `Sample${i}`,
                    date : '2018年1月 ～ 2018年12月',
                    description : [ 'サンプルです' ],
                    thumbnailUrl : 'https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/catSmall.jpg?alt=media&token=dac25bec-7207-4a59-bedb-3d6b5cb719cd',
                    tags : [ 'Sample1', `Sample${i + 3}` ]
                }
            );
        }

        for(let i = 3; i < 6; i++)
        {
            ret.push(
                {
                    title : `Sample${i}`,
                    date : '2018年1月 ～ 2018年12月',
                    description : [ 'サンプルです' ],
                    thumbnailUrl : 'https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/catBig.jpg?alt=media&token=f12d00f6-7f33-4f03-b7eb-619377a48498',
                    tags : [ 'Sample1', `Sample${i + 3}` ]
                }
            );
        }

        for(let i = 6; i < 20; i++)
        {
            ret.push(
                {
                    title : `Sample${i}`,
                    date : '2018年1月 ～ 2018年12月',
                    description : [ 'サンプルです' ],
                    thumbnailUrl : 'https://firebasestorage.googleapis.com/v0/b/graphicrecorderportfolio.appspot.com/o/catBig2.jpg?alt=media&token=17aff910-222f-4080-96c1-dc85c90fa8b8',
                    tags : [ 'Sample1', `Sample${i + 3}` ]
                }
            );
        }

        return ret;
    }
}