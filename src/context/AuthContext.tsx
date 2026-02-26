import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth"; 
import { auth, googleProvider, microsoftProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

interface AuthContextProps {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  loginWithMicrosoft: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loginWithGoogle: async () => {},
  loginWithMicrosoft: async () => {},
  logout: async () => {},
  loading: true,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  };

  const loginWithMicrosoft = async () => {
    try {
      const result = await signInWithPopup(auth, microsoftProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Microsoft login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, loginWithMicrosoft, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for easier usage
export const useAuth = () => useContext(AuthContext);