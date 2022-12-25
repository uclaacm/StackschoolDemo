import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import FeedPage from './pages/feed';
import ProfilePage from './pages/profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/feed' element={<FeedPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

