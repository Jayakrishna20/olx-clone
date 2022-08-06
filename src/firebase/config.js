import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB0PmNbM-sz3GhieftDAwJDYA5q0XZNIcU",
    authDomain: "olx-clone-fcce0.firebaseapp.com",
    projectId: "olx-clone-fcce0",
    storageBucket: "olx-clone-fcce0.appspot.com",
    messagingSenderId: "928350513014",
    appId: "1:928350513014:web:45642dae6e1c72135afc57",
    measurementId: "G-6322RV4GK2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);