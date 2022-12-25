import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <ul>
      <li>
        <Link to='/feed'>Feed</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
    </ul>
  );
}

export default NavBar;
