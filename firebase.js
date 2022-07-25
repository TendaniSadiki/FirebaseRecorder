import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ncU8X3t6DmdPtovdH5PSxmiAS3Sh6aQ",
  authDomain: "voice-recorder-1ea4b.firebaseapp.com",
  databaseURL: "https://voice-recorder-1ea4b-default-rtdb.firebaseio.com",
  projectId: "voice-recorder-1ea4b",
  storageBucket: "voice-recorder-1ea4b.appspot.com",
  messagingSenderId: "200105039255",
  appId: "1:200105039255:web:7b214e71584bd4dd9ca0d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);