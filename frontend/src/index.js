import React from 'react';
import './styles/globals.css';
import ReactDOM from 'react-dom/client';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/feed' element={<FeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
