import React from 'react';
import '../styles/navBar.css';
import { Outlet, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { useAuthState } from '../context/context.js';
import LoginPage from './LoginPage';
import FeedPage from './FeedPage';
import ProfilePage from './ProfilePage';
import SignupPage from './SignupPage';

const ProtectedRoute = ({ redirectPath = '/login', children }) => {
  const userDetails = useAuthState();
  if (!userDetails.token) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

function App() {
  return (
    <div className='main'>
      <NavBar />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
