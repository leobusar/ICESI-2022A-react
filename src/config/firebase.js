// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqrp_RWd9Geve-IUdxGJXRmceyUfIqEoA",
  authDomain: "react-icesi.firebaseapp.com",
  projectId: "react-icesi",
  storageBucket: "react-icesi.appspot.com",
  messagingSenderId: "527106002655",
  appId: "1:527106002655:web:876da23c0735dbe4d0236a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;