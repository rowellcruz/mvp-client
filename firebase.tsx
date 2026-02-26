import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxx820SXsUimn-fxbeRZtVSxBp9p7rE_k",
  authDomain: "mvp-ams.firebaseapp.com",
  projectId: "mvp-ams",
  storageBucket: "mvp-ams.firebasestorage.app",
  messagingSenderId: "388792204893",
  appId: "1:388792204893:web:4680ca9db754c2d66a97b4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");