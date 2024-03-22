"use client";
import React from 'react'
const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState<Boolean>(false);

    return (

        <>
            <header className="header">
                {/* <!--
                  - overlay
    --> */}
                <div className="overlay" data-overlay></div>

                <div className="container">
                    <a href="#" className="logo">
                        {/* <img
                            src="https://raw.githubusercontent.com/codewithsadee/gamex/244de1829b8ad4249fcf160fc8cdaa4cc25db7ba/assets/images/logo.svg"
                            alt="GameX logo"
                        /> */}
                        <h1 className='text-white font-mono font-extrabold text-4xl '>Astra-X</h1>
                    </a>

                    <button className="nav-open-btn" data-nav-open-btn>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                    <nav className="navbar" data-nav>
                        <div className="navbar-top">
                            <a href="#" className="logo">
                                <img
                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/244de1829b8ad4249fcf160fc8cdaa4cc25db7ba/assets/images/logo.svg"
                                    alt="GameX logo"
                                />
                            </a>

                            <button className="nav-close-btn" data-nav-close-btn>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>

                        <ul className="navbar-list">
                            <li>
                                <a href="#hero" className="navbar-link">Home</a>
                            </li>

                            <li>
                                <a href="#about" className="navbar-link">Event</a>
                            </li>

                            <li>
                                <a href="#tournament" className="navbar-link">ORGANIZING COMMITTEE</a>
                            </li>



                            <li>
                                <a href="#gears" className="navbar-link">About</a>
                            </li>

                            <li>
                                <a href="#contact" className="navbar-link">Contact</a>
                            </li>
                        </ul>

                        <ul className="nav-social-list">
                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button className="search">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>

                        <button className="btn-sign_in">
                            <div className="icon-box">
                                <ion-icon name="log-in-outline"></ion-icon>
                            </div>

                            <span>Registration</span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar