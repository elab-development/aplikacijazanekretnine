import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKC1vSiTuEwlUnkFJ0k6F2X02trUT0z1o",
  authDomain: "homyz-de3e7.firebaseapp.com",
  projectId: "homyz-de3e7",
  storageBucket: "homyz-de3e7.appspot.com",
  messagingSenderId: "563977046841",
  appId: "1:563977046841:web:044856855ec49fb0c8f6e8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);