import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvCZqn9HyNL8DdS11hodPPdZFGEgPLhlQ",
  authDomain: "phone-auth-5dec5.firebaseapp.com",
  projectId: "phone-auth-5dec5",
  storageBucket: "phone-auth-5dec5.appspot.com",
  messagingSenderId: "726995618106",
  appId: "1:726995618106:web:9ddc5ba4eae5b4af456803",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
