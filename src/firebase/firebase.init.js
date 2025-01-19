// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe8pWXq83mGnGobgwfWCzvfffAIicqIWM",
  authDomain: "fir-practice-4068b.firebaseapp.com",
  projectId: "fir-practice-4068b",
  storageBucket: "fir-practice-4068b.firebasestorage.app",
  messagingSenderId: "982227663078",
  appId: "1:982227663078:web:fde7a5a53fcac82ed8e327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

