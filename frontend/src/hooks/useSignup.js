import { useState } from "react";

function useSignup () {
  const url = "http://localhost:4000/api/user/signup";
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const handleSignup = async (object) => {
      setIsLoading(true);
      setError(null);
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });

      const user = await response.json();
  
      if (!response.ok) {
          console.log(user.error);
        setError(user.error);
        setIsLoading(false);
        return error;
      }
  
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoading(false);
    };

    return { handleSignup, isLoading, error };
}

export default useSignup;

/* const useSignup = () => {
  const navigate = useNavigate();

  const handleSignup = async (username, email, password, password2) => {
    try {
      const response = await fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, password2 }),
      });

      console.log("Response:", response); // Log the response

      if (response.ok) {
        console.log("MOi");
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        // setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return {
    handleSignup,
  };
};

export default useSignup;
*/