import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo-1.webp';
import { navbar } from '../Data/Data';
import './Header.css';
import { LuMessageCircle } from 'react-icons/lu';
import { IoCloseSharp, IoLogoLinkedin, IoSearch } from 'react-icons/io5';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoMdArrowDropright } from 'react-icons/io';

const Header = () => {
    const [rotationStates, setRotationStates] = useState({});

    const handleToggleRotation = (name) => {
        setRotationStates(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg pt-4">
                <div className="container-lg container-fluid">
                    <div className="logoimg">
                        <img src={logo} className="logoimg_2" alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="bg_blue menu text-white fw-bold urbanist">Menu</span>
                    </button>
                    <div className="offcanvas off offcanvas-start bg-black" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header justify-content-end">
                            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close"><IoCloseSharp className="fs-3 icon_close" /></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="text-center d-lg-none mb-5">
                                <img src="https://themexriver.com/wp/goyto/wp-content/uploads/2024/04/logo-white.svg" alt="" />
                            </div>
                            <div className="text-center nav_input d-lg-none position-relative mb-5">
                                <input type="text" className="form-control head_input border-0 urbanist rounded-0 bg-black" placeholder="Search KeyWords.." />
                                <div>
                                    <IoSearch className="search_icon fs-4" />
                                </div>
                            </div>
                            <ul className="navbar-nav align-items-lg-center justify-content-center mb-4 mb-lg-0 flex-grow-1 urbanist">
                                {navbar.map((nav) => (
                                    <li className="nav-item position-relative main_li" key={nav.Name}>
                                        <Link className="nav-link fw-bold ms-3 d-flex justify-content-between align-items-center" onClick={() => handleToggleRotation(nav.Name)}>
                                            {nav.Name}
                                            <span className="d-custom-none">{nav.icon}</span>
                                            <span className={`arrow_icon ${rotationStates[nav.Name] ? 'rotated' : ''}`}>
                                                <IoMdArrowDropright className="fs-3 d-none arrow_icon" />
                                            </span>
                                        </Link>
                                        <ul className={`sub_main w-100 dropdown_menu-6 ${rotationStates[nav.Name] ? 'show' : ''}`}>
                                            {nav.Submenu.map((sub) => (
                                                <li key={sub.Name}>
                                                    <Link className="submenu text-white fw-bold urbanist">{sub.Name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                            <div className="gap-2 d-flex justify-content-center align-items-center bg_blue talk urbanist fw-bold">
                                <LuMessageCircle className="fs-4 icon_mess" /> <span className="mx-auto me-lg-2">Let's Talk</span> <IoSearch className="fs-4" />
                            </div>
                            <div className="d-flex gap-3 justify-content-center text-white d-lg-none d-block">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaYoutube />
                                <IoLogoLinkedin />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
