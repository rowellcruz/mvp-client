import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, microsoftProvider } from "../../firebase";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error: any) {
    console.error("Google login error:", error.message);
    throw error;
  }
};

export const loginWithMicrosoft = async () => {
  try {
    const result = await signInWithPopup(auth, microsoftProvider);
    return result.user;
  } catch (error: any) {
    console.error("Microsoft login error:", error.message);
    throw error;
  }
};