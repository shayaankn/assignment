// src/Navbar.js

import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <a className="navbar-brand animated-text-navbar" href="#">LEXOGRINE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link animated-text-navbar" href="#">our work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link animated-text-navbar" href="#">about us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link animated-text-navbar" href="#">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link animated-text-navbar" href="#">workshops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link animated-text-navbar" href="#">get a quote</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;