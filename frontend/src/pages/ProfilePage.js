import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/profile.css';
import ProfileButton from '../components/ProfileButton';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const URL = 'http://localhost:3001';

function ProfilePage() {
  return (
    <div className='App'>
      <p>Here is the profile page</p>
      <ProfileButton />
    </div>
  );
}

export default ProfilePage;

// User context with authentication tutorial: https://soshace.com/react-user-login-authentication-using-usecontext-and-usereducer/
