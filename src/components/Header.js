import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icon-menu.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo W." className='logo' />
            <img src={menu} alt="Menu button" className='icon-menu' />
        </header>
    )
}

export default Header
