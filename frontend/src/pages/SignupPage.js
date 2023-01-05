import '../styles/login.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../context/context.js';
import { loginUser } from '../context/actions.js';

const URL = 'http://localhost:3001'

function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const navigate = useNavigate();

    const createUser = async () => {
        axios.post(URL + '/users/new', {
            username: username,
            password: password
        }).then(handleLogin());
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
                console.log('should nav')
                navigate('/feed');
                console.log('navigated to feed')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='login_page'>
            <div className='login_box'>
                <h1 className='header'>Sign Up</h1>
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
                        type='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />

                    {errorMessage ? <p className='error'>{errorMessage}</p> : null}
                    <button className='login_button' onClick={createUser} disabled={loading}>
                        sign up
                    </button>
                    <button className='signup_button' onClick={() => navigate('/login')}>back</button>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;