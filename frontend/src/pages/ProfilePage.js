import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/profile.css';
import FeedPost from '../components/FeedPost';
import ProfileButton from '../components/ProfileButton';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch, useAuthState } from '../context';
import { logout } from '../context/actions';

const URL = 'http://localhost:3001';

function ProfilePage() {
  const [posts, setPosts] = useState([]);

  // Get the posts related to user
  async function getPosts() {
    try {
      const response = await axios.get(URL + '/feed/' + userDetails.username);
      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function incrementLike(id) {
    axios
      .put(URL + '/feed/update/' + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function deletePost(id) {
    axios
      .delete(URL + '/feed/delete/' + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getPosts();
  }, [posts]);

  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    logout(dispatch);
    navigate('/login');
    return;
  };

  const userDetails = useAuthState();

  return (
    <div className='App profile'>
      <div className='return'>
        <ProfileButton />
        <div className='info'>
          <p>Welcome, {userDetails.username}</p>
          <button onClick={handleLogout} className='button'>
            Logout
          </button>
        </div>
      </div>
      <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>Your Posts</p>
      {posts
        .map((post) => (
          <FeedPost
            key={post._id}
            content={post.content}
            likes={post.num_likes}
            incrementLike={incrementLike}
            deletePost={deletePost}
            id={post._id}
            timestamp={post.timestamp}
          />
        ))
        .reverse()}
    </div>
  );
}

export default ProfilePage;

// User context with authentication tutorial: https://soshace.com/react-user-login-authentication-using-usecontext-and-usereducer/
