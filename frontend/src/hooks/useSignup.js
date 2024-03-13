import { useState } from "react";

export default function useSignup(url) {
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(null);

  const signup = async (object) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });

    console.log("Response from url:", response); // Log the response

    const user = await response.json();

    if (!response.ok) {
      console.log("Registration Hook Passed.");
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", user.token);
    };
  };

  return {signup, error, isloading};
};