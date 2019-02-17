import { Controller } from "stimulus"
import FireBase from 'firebase'

const firebase = FireBase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGEING_SENDER_ID
});

const database = firebase.database();

export default class extends Controller {
    static get targets() {
        return [ "content", "preview" ]
    }

    content() {
        this.previewTarget.innerHTML = this.contentTarget.value
    }

    submit() {
        database.ref('ctimuluse').push({
            content: this.contentTarget.value
        });
        this.contentTarget.value = "";
        this.previewTarget.innerHTML = "";
    }
}