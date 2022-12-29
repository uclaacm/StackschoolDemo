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
        <a href='https://hack.uclaacm.com/' target='_blank' rel='noreferrer'>
          <img src={HackLogo} id='lightbulb' alt='Hack Logo' />
          <img src={HackLogoText} id='hackText' alt='Hack Logo' />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
