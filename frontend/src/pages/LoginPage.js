import '../styles/login.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../context/context.js';
import { loginUser } from '../context/actions.js';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup')
    }

    const handleLogin = async (err) => {
        const payload = {
            username: username,
            password: password,
            token: 'myspecialtoken'
        }
        try {
            const res = await loginUser(dispatch, payload);
            if (!res) return;
            else {
                navigate('/feed');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='login_page'>
            <div className='login_box'>
                <h1 className='header'>Login</h1>
                <div className='login_form'>
                    <input
                        className='input'
                        placeholder='Username'
                        type='text'
                        val={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                    />
                    <input
                        className='input'
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />

                    {errorMessage ? <p className='error'>{errorMessage}</p> : null}
                    <button className='login_button' onClick={handleLogin} disabled={loading}>
                        log in
                    </button>
                    <button className='signup_button' onClick={handleSignup}>sign up</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;