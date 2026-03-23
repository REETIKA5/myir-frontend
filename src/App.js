import React, { useState } from "react";
import LoginScreen from "./Screens/LoginScreen";
import "./styles.css";

function App() {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    alert("Login clicked");
  };

  return (
    <LoginScreen
      formData={formData}
      handleChange={handleChange}
      onLogin={handleLogin}
    />
  );
}

export default App;