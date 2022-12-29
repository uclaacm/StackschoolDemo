import React from 'react';
import PFP from '../img/PFP.png';
import { NavLink } from 'react-router-dom';

function ProfileButton() {
  return (
    <NavLink to='/profile' className='profileLink'>
      <img src={PFP} id='profileImg' alt='Profile' />
    </NavLink>
  );
}

export default ProfileButton;
