import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb1azgWWlEHxTNeu191prjjg7nKRLGUqU",
  authDomain: "library-4dd63.firebaseapp.com",
  projectId: "library-4dd63",
  storageBucket: "library-4dd63.firebasestorage.app",
  messagingSenderId: "230856696845",
  appId: "1:230856696845:web:1e6564733a08f430e02144",
  measurementId: "G-0QD0LGGD8Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);