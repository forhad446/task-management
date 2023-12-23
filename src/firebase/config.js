import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUh3nwQ_bphmrl62PDOt72wQ16GmNCdME",
    authDomain: "task-management-47cd4.firebaseapp.com",
    projectId: "task-management-47cd4",
    storageBucket: "task-management-47cd4.appspot.com",
    messagingSenderId: "73098731853",
    appId: "1:73098731853:web:6e420115eac3e0c8ae1704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);