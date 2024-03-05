import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDwxqDDQzuTyRb2hw22fu90mxcOSMtsyGI",
    authDomain: "pgc-ebook.firebaseapp.com",
    databaseURL: "https://pgc-ebook-default-rtdb.firebaseio.com",
    projectId: "pgc-ebook",
    storageBucket: "pgc-ebook.appspot.com",
    messagingSenderId: "368767577578",
    appId: "1:368767577578:web:71470ff327bc8887375693",
    measurementId: "G-ERXRV3LB18"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);