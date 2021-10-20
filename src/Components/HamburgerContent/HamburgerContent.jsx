
import React from 'react';
import './hamburgerContent.scss';

function HamburgerContent(props) {
    const {setHamburgerUp} = props;

    const closeHamburger = ()=> {
        setHamburgerUp(false)
    }

    return (
        <div className='Hamburger-content'>
            <ul>
                <li onClick={closeHamburger}>About</li>
                <li onClick={closeHamburger}>Discover</li>
                <li onClick={closeHamburger}>Get Started</li>
            </ul>
        </div>
    )
}

export default HamburgerContent
