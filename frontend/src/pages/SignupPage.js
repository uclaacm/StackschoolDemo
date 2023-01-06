import '../styles/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
        try {
            dispatch({ type: 'REQUEST_SIGNUP' });
            const res = await axios.post(URL + '/users/new', {
                username: username,
                password: password
            });
            const data = res.data;
            console.log(data)
            if (!data.error) { // valid signup 
                dispatch({ type: 'SIGNUP_SUCCESS', payload: data});
                handleLogin();
            }
            else {
                dispatch({ type: 'SIGNUP_ERROR', payload: data.error });
            }
        } catch (err) {
            dispatch({ type: 'SIGNUP_ERROR', error: err})
        }
    }

    const handleLogin = async (err) => {
        const payload = {
            username: username,
            password: password,
        }
        console.log(payload)
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