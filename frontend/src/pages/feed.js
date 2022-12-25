import '../styles/feed.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserPost from '../components/UserPost';
import FeedPost from '../components/FeedPost';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

const URL = 'http://localhost:3001';

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  //Gets the entire feed
  async function getFeed() {
    try {
      const response = await axios.get(URL + '/feed');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  //Lets user add new post
  //TBD: passing in user value
  async function addPost() {
    //Catches if user doesn't enter text
    if (newPost === '') {
      console.log('You must enter a value!');
      return;
    }

    axios
      .post(URL + '/feed/new', {
        content: newPost,
        user: 'placeholder user (TODO)',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setNewPost('');
  }

  useEffect(() => {
    getFeed();
  }, [posts]);

  return (
    <div className='App feed'>
      {/* <Link to='/profile'>Profile</Link> */}
      <UserPost newPost={newPost} setNewPost={setNewPost} addPost={addPost} />
      {posts
        .map((post) => (
          <FeedPost key={post._id} content={post.content} user={post.user} />
        ))
        .reverse()}
    </div>
  );
}

export default FeedPage;
