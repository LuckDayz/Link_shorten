import {getApps, getApp, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDE8h1AMtca5Bm6WJ5mh9DLhlh2lVAtt-o",
  authDomain: "link-shorten-3d68b.firebaseapp.com",
  projectId: "link-shorten-3d68b",
  storageBucket: "link-shorten-3d68b.appspot.com",
  messagingSenderId: "547496145967",
  appId: "1:547496145967:web:6df0704c75d47ffd0782da",
  measurementId: "G-WLKY7XM6C6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, app, firestore};