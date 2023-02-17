import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPxqOdrquoSctSorZzeIPKMWb9f9HTQ4w",
  authDomain: "chat-gpt-3-7caae.firebaseapp.com",
  projectId: "chat-gpt-3-7caae",
  storageBucket: "chat-gpt-3-7caae.appspot.com",
  messagingSenderId: "948370754770",
  appId: "1:948370754770:web:747e34f5886bd56e5f710b",
  measurementId: "G-8HHZZNF8Q5",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
