import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <span className="nav__session">
        <NavLink className='nav__login' to="/login">Log In</NavLink>
        <NavLink className='nav__signup' to="/signup">Sign Up</NavLink>
      </span>
    );
  }

  return (
    <nav className ='nav__main'>
        <div className= 'nav__home'>
          <NavLink className ='nav__writeitdown' exact to='/'><img src='/assets/roughdraftWriteItDown.png' /></NavLink>
        </div>
          {isLoaded && sessionLinks}

    </nav>

  );
}

export default Navigation;
