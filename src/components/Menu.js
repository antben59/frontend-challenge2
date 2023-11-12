import React from 'react';
import closeMenu from '../assets/images/icon-menu-close.svg';

const Menu = () => {
    return (
        <div className='container-menu '>
            <nav className='menu-content'>
                <span className='close'></span>
                <a href="/">Home</a>
                <a href="/">New</a>
                <a href="/">Popular</a>
                <a href="/">Trending</a>
                <a href="/">Categories</a>
            </nav>
        </div>
    )
}

export default Menu
