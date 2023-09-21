import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDkrk9-5PX01lVkxNZeGJYsShU44k7HA0I",
    authDomain: "auth-draganddropapp.firebaseapp.com",
    projectId: "auth-draganddropapp",
    storageBucket: "auth-draganddropapp.appspot.com",
    messagingSenderId: "554361070996",
    appId: "1:554361070996:web:e900cce61bfc6e82325b81"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app as default}