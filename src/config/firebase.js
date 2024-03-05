// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";





export const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: "pegaapp-7dc1e.firebaseapp.com",

  projectId: "pegaapp-7dc1e",

  storageBucket: "pegaapp-7dc1e.appspot.com",

  messagingSenderId: "1035404571904",

  appId: "1:1035404571904:web:0afcaa7c38cd6e59d92fe5",

  measurementId: "G-FWLWMFN224"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

