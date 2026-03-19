import React from "react";
import "../style/register.scss";
import "../style/button.scss";
import Formgroup from "../components/Formgroup";
import { Link } from "react-router";

const register = () => {
  return (
    <main className="register-page">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="shooting-stars"></div>
      <div className="form-container">
        <h1>Create Account</h1>

        <form>
          <Formgroup
            label="Name"
            type="text"
            placeholder="Enter your name"
          />
          <Formgroup
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <Formgroup
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">Register</button>
        </form>

        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </p>
      </div>
    </main>
  );
};

export default register;