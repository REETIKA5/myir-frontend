import React from "react";

export default function LoginScreen({ formData, handleChange, onLogin }) {
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="top-bar">
          <div className="logo-circle">myIR</div>
        </div>

        <div className="hero-section">
          <div className="login-card">
            <h2>Log in to myIR</h2>

            <label>User ID</label>
            <input
              type="text"
              name="userId"
              placeholder="Enter your user ID"
              value={formData.userId}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            <button onClick={onLogin}>Log in</button>

            <p>Forgot user ID or password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}