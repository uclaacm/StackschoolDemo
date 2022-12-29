import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/profile.css';
import ProfileButton from '../components/ProfileButton';
import { NavLink } from 'react-router-dom';

const URL = 'http://localhost:3001';

function ProfilePage() {
  //Get the username
  // async function getUser() {
  // }

  //Get the posts related to user
  // async function getPosts() {
  // }

  return (
    <div className='App profile'>
      <div className='return'>
        <ProfileButton />
        <div className='info'>
          <p>Welcome, *Username here*</p>
          <NavLink to='/feed' className='button'>
            Return to Feed
          </NavLink>
        </div>
      </div>
      <p>Your Posts</p>
    </div>
  );
}

export default ProfilePage;

// User context with authentication tutorial: https://soshace.com/react-user-login-authentication-using-usecontext-and-usereducer/
