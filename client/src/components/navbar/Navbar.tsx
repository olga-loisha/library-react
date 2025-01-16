import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router';
import {MdLightMode} from 'react-icons/md';
import {MdModeNight} from 'react-icons/md';

import './Navbar.css';
import {ThemeContext} from '../../contexts/themeContext';

const Navbar = () => {
    const {currentTheme, themeSwitchHandler} = useContext(ThemeContext);

    useEffect(() => {
        window.localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const showIcon = () => {
        return currentTheme === 'light' ?
            (<li onClick={() => themeSwitchHandler('dark')}>
                <MdModeNight/>
            </li>) :
            (<li onClick={() => themeSwitchHandler('light')}>
                <MdLightMode/>
            </li>)
    };

    return (
        <header className={`header header-${currentTheme}`}>
            <h3>Library</h3>
            <nav>
                <ul>
                    <li><Link to="/books/1">Books</Link></li>
                    <li><Link to="/">About</Link></li>
                    {showIcon()}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
