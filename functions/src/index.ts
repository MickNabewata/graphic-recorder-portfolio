import { initializeApp } from 'firebase-admin';
import { https, config } from 'firebase-functions';
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
const to = 'aquarius.mikito.0123@gmail.com';

/** メール送信内容 */
export interface mailData {
    /** 本文 */
    text: string,
    /** 連絡先 */
    contact: string
}

/** GMail送信 */
exports.sendMail = https.onCall((data : any, context : https.CallableContext) => {
    const email = {
        from: gmailEmail,
        to: to,
        subject: `ポートフォリオサイトからの問い合わせ`,
        text: `ポートフォリオサイトから問い合わせがありました。\r\n\r\n--------\r\n${data.text}--------\r\n連絡先：${data.contact}`
    };
    mailTransport.sendMail(email, (err, info) => {
        if (err) {
            console.log(err);
        }
        else
        {
            console.log('success');
        }
    });
});

initializeApp();