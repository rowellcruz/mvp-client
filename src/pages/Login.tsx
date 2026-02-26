import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { loginWithGoogle, loginWithMicrosoft, user, loading } = useAuth();
  const navigate = useNavigate();

  const handleGoogle = async () => {
    await loginWithGoogle();
    navigate("/dashboard");
  };

  const handleMicrosoft = async () => {
    await loginWithMicrosoft();
    navigate("/dashboard");
  };

  if (loading) return <div>Loading...</div>;

  if (user) {
    navigate("/dashboard");
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <button onClick={handleGoogle} className="btn-google">
        Sign in with Google
      </button>
      <button onClick={handleMicrosoft} className="btn-ms">
        Sign in with Microsoft
      </button>
    </div>
  );
};

export default Login;