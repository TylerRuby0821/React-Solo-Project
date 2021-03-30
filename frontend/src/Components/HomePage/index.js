import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './HomePage.css'


function HomePage() {
    return (
		<div className= 'body__main'>
            <h1>Keep better notes</h1>
            <h5>WriteItDown, so you dont forget.</h5>
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
