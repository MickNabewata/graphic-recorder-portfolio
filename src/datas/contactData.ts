import { IFireData, IDataType } from './IFireData';

/** 問い合わせデータ型 */
export interface ContactType extends IDataType {
    /** ご依頼内容 */
    text: string,
    /** ご連絡先 */
    contact: string
}

/** 問い合わせデータ */
export class ContactData extends IFireData<ContactType> {

    /** コレクション名 */
    collectionName = 'contacts';

}