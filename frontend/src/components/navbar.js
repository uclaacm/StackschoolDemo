import React from 'react';
import HackLogo from '../img/hack-logo.png';
import HackLogoText from '../img/hack-text.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navigation'>
      <div className='nav'>
        <NavLink to='/feed' className='link'>
          Feed
        </NavLink>

        <NavLink to='/profile' className='link'>
          Profile
        </NavLink>
      </div>
      <div className='hack'>
        <a href='https://hack.uclaacm.com/' target='_blank'>
          <img src={HackLogo} id='lightbulb' />
          <img src={HackLogoText} id='hackText' />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
