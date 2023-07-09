// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS4pzNmqrtK_WEopwmKpBNrDRwzDo7S-U",
  authDomain: "digischool-c39d1.firebaseapp.com",
  projectId: "digischool-c39d1",
  storageBucket: "digischool-c39d1.appspot.com",
  messagingSenderId: "102542432285",
  appId: "1:102542432285:web:b60ac01188bb0b3eae8ef4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app