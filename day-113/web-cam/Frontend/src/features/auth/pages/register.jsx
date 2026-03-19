import React, { useState } from 'react'
import "../style/register.scss";
import "../style/button.scss";
import Formgroup from "../components/Formgroup";
import { Link } from "react-router";
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router'


const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const { loading, handleRegister } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    await handleRegister({ username, password, email })

    navigate('/')

  }

  return (
    <main className="register-page">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="shooting-stars"></div>
      <div className="form-container">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <Formgroup
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Name"
            placeholder="Enter your name"
          />
          <Formgroup
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email"
          />
          <Formgroup
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter your password"
          />

          <button className='button' type="submit">Register</button>
        </form>

        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;