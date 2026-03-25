import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // redirect after login
  };

  return (
    <div className="login-container">
      {/* Navbar */}
      <div className="login-navbar">
        <div className="logo">myIR</div>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <h2>Log in to myIR</h2>
        <p className="subtitle">Access your tax information securely</p>

        <form onSubmit={handleLogin}>
          <label>User ID</label>
          <input
            type="text"
            placeholder="Enter your IRD number or username"
            required
          />
          <small>Your IRD number is 8–9 digits</small>

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <div className="forgot">
            <a href="#">Forgot user ID or password?</a>
          </div>

          <button className="login-btn">Log in</button>

          <div className="divider">OR</div>

          <button type="button" className="secondary-btn">
            Log in with RealMe
          </button>

          <button type="button" className="secondary-btn">
            Log in with passkey
          </button>

          <p className="help-text">
            Need help? Visit our <a href="#">support page</a> or call 0800 22 77 74
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;