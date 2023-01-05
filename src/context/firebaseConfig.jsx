// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2gFI5ivvb1ZNYWWpAL3Rrn1zueIcz0Zk",
  authDomain: "social-media-app-f8e71.firebaseapp.com",
  projectId: "social-media-app-f8e71",
  storageBucket: "social-media-app-f8e71.appspot.com",
  messagingSenderId: "1083842904483",
  appId: "1:1083842904483:web:1e74e44d5f3b9ecaf59a16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
export default app;