import React, { useState } from 'react'
import "../style/login.scss"
import "../style/button.scss"
import Formgroup from '../components/Formgroup'
import { Link } from "react-router";
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router'

const Login = () => {

    const { loading, handleLogin } = useAuth()

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate("/")
    }

    return (
        <div>
            <main className="loginpage">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <div className="shooting-stars"></div>

                <div className="form-container">
                    <h1>login</h1>
                    <form onSubmit={handleSubmit} >

                        <Formgroup
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            placeholder="Enter your email" />

                        <Formgroup
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="password"
                            placeholder="Enter your password" />

                        <button className='button' type='submit'>Login</button>
                    </form>

                    <p className="auth-link">
                        New User?{" "}
                        <Link to="/register">Register here</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Login
