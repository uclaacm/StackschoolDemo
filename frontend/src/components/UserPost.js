import React from 'react';

function UserPost({ newPost, setNewPost, addPost }) {
  return (
    <div className='message'>
      <input
        type='text'
        className='messageInput'
        onChange={(e) => setNewPost(e.target.value)}
        placeholder='What the Hack are you up to?'
        value={newPost}
      />
      <div
        className='button'
        onClick={() => {
          addPost();
        }}
      >
        Post
      </div>
    </div>
  );
}

export default UserPost;
