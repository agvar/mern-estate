// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernrealestate-63007.firebaseapp.com",
  projectId: "mernrealestate-63007",
  storageBucket: "mernrealestate-63007.appspot.com",
  messagingSenderId: "652951125301",
  appId: "1:652951125301:web:72c9682dd0154364b3207c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);