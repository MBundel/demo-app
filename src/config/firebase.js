// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";





export const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: "pegaapp-5575e.firebaseapp.com",

  projectId: "pegaapp-5575e",

  storageBucket: "pegaapp-5575e.appspot.com",

  messagingSenderId: "334518320174",

  appId: "1:334518320174:web:970dff531784534e8273bf",

 
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

