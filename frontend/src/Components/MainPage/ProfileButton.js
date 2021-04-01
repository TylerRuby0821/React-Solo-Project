import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './MainPage.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="profile__button" onClick={openMenu}>
        <i className="fas fa-portrait" />
        {user?.username}
      </button>
      {showMenu && (
        <div className='profile__menu'>
          <h2 className='nav__section'>Account</h2>
          <ul className='nav__chunk'>
            <li>{user?.email}</li>
          <ul>
            <li className='seperator'></li>
            <li> Account info...</li>
            <li> Preferences</li>
            <li> Share Feedback</li>
            <li>
              <button className='sidenav dropdown__logout' onClick={logout}>Sign out {user.username}</button>
            </li>
            </ul>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
