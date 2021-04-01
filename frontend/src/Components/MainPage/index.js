import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './MainPage.css'
import ProfileButton from './ProfileButton';

function MainPage() {
  const sessionUser = useSelector(state => state.session.user);

    return (
		<div className ='sidebar'>
        <div className="sidebar__user">
          <ProfileButton user={sessionUser} />
        </div>
        <div className="navbar__search">
          <input className="nav__search" type="text" placeholder="Search" />
        </div>
        <div>
          <button className="new__note">
            New Note
          </button>
        </div>
        <ul>
          <li className='nav__menu--item'>Home</li>
          <li className='nav__menu--item'>Shortcuts</li>
          <li className='nav__menu--item extra__space'>Notes</li>
          <li className='nav__menu--item'>NoteBooks</li>
          <li className='nav__menu--item'>Tags</li>
          <li className='nav__menu--item extra__space'>Shared with Me</li>
          <li className='nav__menu--item'>Trash</li>
        </ul>

		</div>
    )
}

export default MainPage;
