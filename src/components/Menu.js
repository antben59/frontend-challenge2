import React, { useState } from 'react';
import closeMenu from '../assets/images/icon-menu-close.svg';

const Menu = ({ isOpen, setIsOpen }) => {

    const activeClass = isOpen ? 'active' : '';

    const toggleActive = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`container-menu ${activeClass}`} >
            <nav className='menu-content'>
                <span className='close' onClick={toggleActive}></span>
                <a href="/">Home</a>
                <a href="/">New</a>
                <a href="/">Popular</a>
                <a href="/">Trending</a>
                <a href="/">Categories</a>
            </nav>
        </div >
    )
}

export default Menu
