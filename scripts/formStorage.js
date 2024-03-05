import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

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
const analytics = getAnalytics(app);

export { app, analytics };