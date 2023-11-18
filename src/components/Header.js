import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icon-menu.svg';
import Menu from './Menu';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <img src={logo} alt="Logo W." className='logo' />
            <img src={menu} alt="Menu button" className='icon-menu' onClick={toggleMenu} />
            <Menu
                isOpen={isOpen}
                setIsOpen={setIsOpen}></Menu>
        </header>
    )
}

export default Header
