import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/profile.css';
import ProfileButton from '../components/ProfileButton';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch, useAuthState } from '../context';
import { logout } from '../context/actions';

const URL = 'http://localhost:3001';

function ProfilePage() {
  //Get the username
  // async function getUser() {
  // }

  //Get the posts related to user
  // async function getPosts() {
  // }
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    logout(dispatch)
    navigate('/login')
    return;
  }

  return (
    <div className='App profile'>
      <div className='return'>
        <ProfileButton />
        <div className='info'>
          <p>Welcome, *Username here*</p>
          <button onClick={handleLogout} className='button'>
            Logout
          </button>
        </div>
      </div>
      <p>Your Posts</p>
    </div>
  );
}

export default ProfilePage;

// User context with authentication tutorial: https://soshace.com/react-user-login-authentication-using-usecontext-and-usereducer/
