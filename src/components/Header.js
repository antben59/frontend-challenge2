import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icon-menu.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo W." width="50px" height="auto" />
            <img src={menu} alt="Menu button" width="50px" height="auto" />

            {/* <nav>
                <a href="/">Home</a>
                <a href="/">New</a>
                <a href="/">Popular</a>
                <a href="/">Trending</a>
                <a href="/">Categories</a>
            </nav> */}
        </header>
    )
}

export default Header
