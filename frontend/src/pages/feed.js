import '../styles/globals.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const URL = 'http://localhost:3001';

function FeedPage() {
  const [posts, setPosts] = useState([]);

  //Gets the entire feed
  async function getFeed() {
    try {
      const response = await axios.get(URL + '/feed');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className='App'>
      <Link to='/profile'>Profile</Link>
      <p>hi</p>
      {posts.map((post) => (
        <p key={post._id}>{post.content}</p>
      ))}
    </div>
  );
}

export default FeedPage;
