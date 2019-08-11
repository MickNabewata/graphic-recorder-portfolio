import { app, initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { Config } from './configUtil';

/** firebaseアプリケーションユーティリティ */
export default class FirebaseAppUtil {

    /** firebaseアプリ */
    static fireApp : app.App;

    /** firebase初期化 */
    static init() {
        this.fireApp = initializeApp({
            apiKey: Config.API_KEY,
            authDomain: Config.AUTH_DOMAIN,
            databaseURL: Config.DATABASE_URL,
            projectId: Config.PROJECT_ID,
            storageBucket: Config.STORAGE_BUCKET,
            messagingSenderId: Config.MESSAGING_SENDER_ID,
            appId: Config.APP_ID
        });
    }
}