import React, { useState } from 'react'
import "../style/login.scss"
import "../style/button.scss"
import { Link } from "react-router";


import Formgroup from '../components/Formgroup'

const login = () => {
    return (
        <div>
            <main className="loginpage">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <div className="shooting-stars"></div>
                <div className="form-container">
                    <h1>login</h1>
                    <form >
                        <Formgroup label="Email" placeholder="Enter your email" />
                        <Formgroup label="password" placeholder="Enter your password" />
                        <button type='submit'>Login</button>
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

export default login
