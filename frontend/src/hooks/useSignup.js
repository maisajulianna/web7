import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();

  const handleSignup = async (username, email, password, password2) => {
    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, password2}),
      });

      console.log("Response:", response); // Log the response
      console.log(response.headers)

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        
        navigate("/home");
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