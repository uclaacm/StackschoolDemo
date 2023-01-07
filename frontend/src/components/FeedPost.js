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
  const numericalTime = new Date(timestamp);
  const date = numericalTime.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  })
  const time = numericalTime.toLocaleTimeString("en-US")

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
      <div className='dateContainer'>
        <p className='date'>{date}</p>
        <p className='date'>{time}</p>
      </div>
    </div>
  );
}

export default FeedPost;
