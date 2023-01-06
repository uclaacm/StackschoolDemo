import React from 'react';
import Heart from '../img/White-Heart.png';
import Trash from '../img/Trash-Icon.png';

function FeedPost({
  content,
  user,
  likes,
  incrementLike,
  deletePost,
  id,
  timestamp,
}) {
  const time = new Date(timestamp);
  const date =
    time.getMonth() +
    1 +
    '/' +
    time.getDate() +
    '/' +
    time.getFullYear() +
    ' ' +
    time.getHours() +
    ':' +
    time.getMinutes() +
    ':' +
    time.getSeconds();

  return (
    <div className='feedPost'>
      <div className='postTop'>
        <h4>{user}</h4>
        {deletePost ? (
          <div
            className='hover'
            onClick={() => {
              deletePost(id);
            }}
          >
            <img src={Trash} alt='Trash' />
          </div>
        ) : null}
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
      <div>
        <p className='date'>{date}</p>
      </div>
    </div>
  );
}

export default FeedPost;
