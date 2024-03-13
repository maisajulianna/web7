import { useState } from "react";

export default function useLogin(url) {
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(null);

  const handleLogin = async (object) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(object)
    });
    console.log(response);

    const user = await response.json();
    if (!response.ok) {
      setError(user.error);
      setIsLoading(false);
      return error;
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.token);
    console.log("User logged in successfully!");
    setIsLoading(false);
  };

  return {
    handleLogin,
    isloading,
    error
  };
};