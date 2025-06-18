import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

 const firebaseConfig = {
    apiKey: "AIzaSyCri5FQ_YjwdoD2HPBLQGIpS8ge3cdPaPc",
    authDomain: "mybd1-ee9d8.firebaseapp.com",
    projectId: "mybd1-ee9d8",
    storageBucket: "mybd1-ee9d8.firebasestorage.app",
    messagingSenderId: "405375264804",
    appId: "1:405375264804:web:8cf04dd520b35b9ff990b1",
    measurementId: "G-G9MSY7J3LH"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
