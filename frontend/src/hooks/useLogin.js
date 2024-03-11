import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    console.log(email, password)
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      });

      console.log(response);
      const user = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully!");
        // setIsAuthenticated(true);
        navigate("/home");
      } else {
        console.error("Login failed");
      };
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return {
    handleLogin,
  };
};

export default useLogin;