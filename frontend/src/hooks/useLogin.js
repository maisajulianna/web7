import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useLogin = () => {
  const navigate = useNavigate();
  const url = "http://localhost:4000/api/user/login";

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const handleLogin = async (object) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });
    const user = await response.json();

    if (!response.ok) {
      setError(user.error);
      setIsLoading(false);
      return error;
    }

    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User logged in successfully!");
    navigate("/home");
  };

  return { handleLogin, isLoading, error };
};

export default useLogin;