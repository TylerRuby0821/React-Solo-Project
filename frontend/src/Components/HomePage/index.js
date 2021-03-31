import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './HomePage.css'


function HomePage() {
    return (
		<div className= 'body__main'>
            <div className ='body__header'>
                <h1 className='body__header--main'>Keep better notes</h1>
                <h5 className='body__header--second'>WriteItDown, so you dont forget.</h5>
            </div>
            <p>
                <NavLink to='/signup'> Sign Up</NavLink>
            </p>
            <p>
                <NavLink to='/login'>Already have an account? Log in!</NavLink>
            </p>
		</div>
    )
}

export default HomePage;
