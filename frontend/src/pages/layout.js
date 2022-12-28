import React from 'react';
import '../styles/navBar.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
