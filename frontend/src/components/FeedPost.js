import React from 'react';
import Heart from '../img/White-Heart.png';
import Trash from '../img/Trash-Icon.png';

function FeedPost({ content, user, likes, incrementLike, deletePost, id }) {
  return (
    <div className='feedPost'>
      <div className='postTop'>
        <h4>{user}</h4>
        <div
          className='hover'
          onClick={() => {
            deletePost(id);
          }}
        >
          <img src={Trash} alt='Trash' />
        </div>
      </div>

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
