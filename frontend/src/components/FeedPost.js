import React from 'react';
import Heart from '../img/White-Heart.png';

function FeedPost({ content, user, likes, incrementLike, id }) {
  return (
    <div className='feedPost'>
      <h4>{user}</h4>

      <div className='content'>
        <div className='text'>
          <p>{content}</p>
        </div>
        <div
          className='like'
          onClick={() => {
            incrementLike(id);
          }}
        >
          <img src={Heart} alt='Heart' />
          <p>{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
