import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7rq5AYzYbcjJ8b-9fmlqkqXRdE0mFM7U",
  authDomain: "ngo-website-45300.firebaseapp.com",
  projectId: "ngo-website-45300",
  storageBucket: "ngo-website-45300.firebasestorage.app",
  messagingSenderId: "759001220751",
  appId: "1:759001220751:web:cccf64a2eaf7dfee41d2fa",
  measurementId: "G-8FL4W0XJK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);