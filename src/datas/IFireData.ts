import FirebaseAppUtil from '../utils/firebaseAppUtil';
import { firestore } from 'firebase';

/** データ型 */
export interface IDataType {
}

export class IFireData<T extends IDataType> {

    /** FireStore */
    db = firestore(FirebaseAppUtil.fireApp);

    /** コレクション名 */
    collectionName: string = '';

    /** 新規データ登録 */
    create(data: T) {
        return this.db.collection(this.collectionName).add(data);
    }

    /** データ取得 */
    read() {
        return this.db.collection(this.collectionName).get();
    }
}