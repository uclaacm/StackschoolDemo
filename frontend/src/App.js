import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const URL = 'http://localhost:3001';

function App() {
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
      <p>hi</p>
      {posts.map((post) => (
        <p key={post._id}>{post.content}</p>
      ))}
    </div>
  );
}

export default App;
