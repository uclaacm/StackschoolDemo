import React from 'react';
import './styles/globals.css';
import ReactDOM from 'react-dom/client';
import { AuthProvider, useAuthState } from './context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
