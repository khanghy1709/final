import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBEGRMIfeiiDpgSY8jR2NFztFculPGgoD4",
  authDomain: "spotify-abf2e.firebaseapp.com",
  projectId: "spotify-abf2e",
  storageBucket: "spotify-abf2e.appspot.com",
  messagingSenderId: "308275337610",
  appId: "1:308275337610:web:34d392589d74d30679d073",
  measurementId: "G-ZFDXV1MQD6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const dangky = async (auth, email, pass) => {
  let isSuccess, infoMessage;
  try {
    const user = await createUserWithEmailAndPassword(auth, email, pass);
    isSuccess = true;
  } catch (error) {
    isSuccess = false;
    infoMessage = error.code;
    console.log(error.code);
  }
  return {
    isSuccess,
    infoMessage,
  };
};

export const dangnhap = async (auth, email, pass) => {
  let isSuccess, infoMessage;
  try {
    const user = await signInWithEmailAndPassword(auth, email, pass);
    isSuccess = true;
  } catch (error) {
    isSuccess = false;
    infoMessage = error.code;
  }
  return {
    isSuccess,
    infoMessage,
  };
};
