import { initializeApp } from 'firebase-admin';
import { config, firestore } from 'firebase-functions';
import { createTransport } from 'nodemailer';

const gmailEmail = config().gmail.email;
const gmailPassword = config().gmail.password;
const mailTransport = createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});
const to = 'contact@yuikonagai.com';

/** メール送信内容 */
export interface mailData {
    /** 本文 */
    text: string,
    /** 連絡先 */
    contact: string
}

/** GMail送信 */
exports.sendMail = firestore.document('/contacts/{contact}').onCreate((snapshot, context)=> {
    console.log('開始します');
    const data = snapshot.data() as mailData;
    if (data) {
        const email = {
            from: gmailEmail,
            to: to,
            subject: `ポートフォリオサイトからの問い合わせ`,
            text: `ポートフォリオサイトから問い合わせがありました。\r\n\r\n-------------\r\n${data.text}\r\n\r\n連絡先：${data.contact}\r\n-------------`
        };
        console.log(email);
        console.log(config().gmail);
        
        return new Promise((resolve: (value?: any) => void, reject: (reason?: any) => void) => {
            mailTransport.sendMail(email, (err, info) => {
                if (err) {
                    console.log('失敗');
                    console.log(err);
                }
                else {
                    console.log('成功');
                }
            });
        });
    }
    else {
        console.log('データがNULLです');
        return undefined;
    }
});

initializeApp();