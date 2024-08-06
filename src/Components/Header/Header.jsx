import React from 'react';
import NavLogo from '/NavLogo.svg';
import NavIcon from '/NavIcon.svg';
import SrcLogo from '/SrcLogo.svg';
import Burger from '/BurgerMenu.svg';

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'; 

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <header className='header'>
            <div className='header-container'>
                <nav className='container nav-container'>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href="#" className='burger-link' onClick={toggleDrawer}>
                                <img src={Burger} className='Burger' alt="Menu icon" />
                            </a>

                            <Drawer
                                open={isOpen}
                                onClose={toggleDrawer}
                                direction='left'
                                className='drawer-container'
                            >
                                <button className='close-button' onClick={toggleDrawer} aria-label="Close menu">
                                    <CloseOutlined className='close-icon' />
                                </button>
                                <div className='drawer-content'>
                                <ul style={{ 
    display: "flex", 
    flexDirection: "column", 
    marginTop: "10px", 
    padding: "0", 
    listStyle: "none", 
    alignItems: "flex-start" 
}}>
    <li style={{ marginBottom: "10px" }}><a  style={{ textDecoration: "none",paddingLeft:"10px" }}> Главная</a></li>
    <li style={{ marginBottom: "10px" }}><NavLink to="/carpets" style={{ textDecoration: "none",paddingLeft:"10px" }}> Ковры</NavLink></li>
    <li style={{ marginBottom: "10px" }}><NavLink to="/rugs" style={{ textDecoration: "none",paddingLeft:"10px" }}> Коврики</NavLink></li>
    <li style={{ marginBottom: "10px" }}><NavLink to="/forbathroom" style={{ textDecoration: "none",paddingLeft:"10px" }}> Для ванной</NavLink></li>
    <li style={{ marginBottom: "10px" }}><NavLink to="/runners" style={{ textDecoration: "none",paddingLeft:"10px" }}> Дорожки</NavLink></li>
    <li style={{ marginBottom: "10px" }}><NavLink to="/specialcarpets" style={{ textDecoration: "none",paddingLeft:"10px" }}> Особенные ковры</NavLink></li>
    <li style={{ marginBottom: "10px" }}><NavLink to="/helpcenter" style={{ textDecoration: "none",paddingLeft:"10px" }}> Центр поддержки</NavLink></li>
    <li style={{ marginBottom: "10px" }}><NavLink to="/contacts" style={{ textDecoration: "none",paddingLeft:"10px" }}> Контакты</NavLink></li>
    <li style={{ marginBottom: "10px" }}><a style={{ textDecoration: "none",paddingLeft:"10px" }}> Вход / Регистрация</a></li>
    <li style={{ marginBottom: "10px" }}><a style={{ textDecoration: "none",paddingLeft:"10px" }}> Алматы <span style={{paddingLeft:"90px",color:"#648E7A"}}>Изменить</span></a></li>
</ul>



                                </div>
                            </Drawer>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>
                                <img className='bayan-sulu-logo' src={NavLogo} alt="Bayan Sulu logo" />
                            </a>
                        </li>
                        <li className='nav-item nev-mobile'>
                            <a href="#" className='nav-link'>
                                <ul className='nav-span nav-mobile gps-icon'>
                                    <li className='nav-item'>
                                        <img className='gps-icon' src={NavIcon} alt="Navigation icon" />
                                    </li>
                                    <li>Алматы</li>
                                </ul>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link nav-mobile'>
                                <ul className='nav-span'>
                                    <li>
                                        <input className='input-src' type="search" placeholder='Поиск по товарам' />
                                    </li>
                                    <img className='src-logo' src={SrcLogo} alt="Search logo" />
                                </ul>
                            </a>
                        </li>
                        <li className='nav-item src-mobile'>
                            <a href="#" className='nav-link'>
                                <ul className='nav-span'>
                                    <span className='src-span-mobile'>
                                        <img src={SrcLogo} alt="Search logo" />
                                        <li>
                                            <input className='src-mobile-input' type="search" placeholder='Поиск' />
                                        </li>
                                    </span>
                                </ul>
                            </a>
                        </li>
                        <li className='nav-item nav-mobile'>
                            <a href="#" className='nav-link'>
                                <AccountCircleIcon className='account-icon' />
                            </a>
                        </li>
                        <li className='nav-item nav-mobile'>
                            <a href="#" className='nav-link'>
                                <FavoriteBorderIcon className='account-icon' />
                            </a>
                        </li>
                        <li className='nav-item nav-mobile'>
                            <a href="#" className='nav-link'>
                                <LocalGroceryStoreIcon className='account-icon' />
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className='container header-bottom-list header-bottom-list-container'>
                    <ul className='header-bottom-list'>
                        <li className='header-bottom-item'>
                            <NavLink to="/carpets" className='header-bottom-link'>
                                Ковры
                            </NavLink>
                        </li>
                        <li className='header-bottom-item'>
                            <NavLink to="/rugs" className='header-bottom-link'>
                                Коврики
                            </NavLink>
                        </li>
                        <li className='header-bottom-item'>
                            <NavLink to="/forbathroom" className='header-bottom-link'>
                                Для ванной
                            </NavLink>
                        </li>
                        <li className='header-bottom-item'>
                            <NavLink to="/runners" className='header-bottom-link'>
                                Дорожки
                            </NavLink>
                        </li>
                        <li className='header-bottom-item'>
                            <NavLink to="/specialcarpets" className='header-bottom-link'>
                                Особенные ковры
                            </NavLink>
                        </li>
                        <li className='header-bottom-item'>
                            <NavLink to="/helpcenter" className='header-bottom-link'>
                                Центр поддержки
                            </NavLink>
                        </li>
                        <li className='header-bottom-item'>
                            <NavLink to="/contacts" className='header-bottom-link'>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
