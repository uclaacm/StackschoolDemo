import React from 'react';
import Heart from '../img/White-Heart.png';

function FeedPost({ content, user }) {
  return (
    <div className='feedPost'>
      <h4>{user}</h4>

      <div className='content'>
        <div className='text'>
          <p>{content}</p>
        </div>
        <div className='like'>
          <img src={Heart} />
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
