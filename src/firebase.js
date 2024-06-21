
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyDCQJ5VqUT9cP1_UBPQOqA7Aia6z7PraDM",

  authDomain: "login-19a01.firebaseapp.com",

  projectId: "login-19a01",

  storageBucket: "login-19a01.appspot.com",

  messagingSenderId: "765782638337",

  appId: "1:765782638337:web:21de7ac7f783cd7c0e2500"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)