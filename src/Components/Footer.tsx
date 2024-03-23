"use client"
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand-wrapper">
                        <a href="#" className="logo">
                            <h1 className='text-white font-mono font-extrabold text-4xl '>Astra-X</h1>

                        </a>

                        <div className="footer-menu-wrapper">
                            <ul className="footer-menu-list">
                                <li>
                                    <a href="#hero" className="navbar-link">Home</a>
                                </li>

                                <li>
                                    <a href="#gears" className="navbar-link">Event</a>
                                </li>

                                <li>
                                    <a href="#team" className="navbar-link">ORGANIZING COMMITTEE</a>
                                </li>



                                <li>
                                    <a href="#about" className="navbar-link">About</a>
                                </li>
                            </ul>

                            <div className="footer-input-wrapper">
                                <input
                                    type="text"
                                    name="message"
                                    required
                                    placeholder="Find Event "
                                    className="footer-input"
                                />

                                <button className="btn btn-primary">
                                    <ion-icon name="search-outline"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-quicklinks">
                        <ul className="quicklink-list">
                            <li>
                                <a href="#" className="quicklink-item">Faq</a>
                            </li>

                            <li>
                                <a href="#" className="quicklink-item">Help center</a>
                            </li>

                            <li>
                                <a href="#" className="quicklink-item">Terms of use</a>
                            </li>

                            <li>
                                <a href="#" className="quicklink-item">Privacy</a>
                            </li>
                        </ul>

                        <ul className="footer-social-list">
                            <li>
                                <a href="#" className="footer-social-link">
                                    <ion-icon name="logo-discord"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-social-link">
                                    <ion-icon name="logo-twitch"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-social-link">
                                    <ion-icon name="logo-xbox"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-social-link">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container ">
                    <p className="copyright">
                        Copyright &copy; 2023 <a href="#">Abhishek majumdar </a> & <a href="#">Rahul </a>. all rights reserved
                    </p>
                </div>
            </div>
        </footer>)
}

export default Footer