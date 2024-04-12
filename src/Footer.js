// src/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-column">
                        {/* <h6 className="footer-heading footer-special-text">We are the <br><span style="color: rgb(145, 115, 228);">Digital Heartbeat</span></h6> */}
                        <h6 className="footer-heading footer-special-text">
                            We are the <br />
                            <span style={{ color: 'rgb(145, 115, 228)' }}>Digital Heartbeat</span>
                        </h6>
                        <p className="disclaimer-text">This is a dummy website made as an assignment. I don't own any rights.</p>
                        {/* <p className="disclaimer-text">Logo API was used from <a href='clearbit.com'>clearbit.com</a></p> */}
                        <p className="disclaimer-text">Logos by <a href="https://www.uilogos.co/">uilogos.co</a>. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/deed.en">CC-BY-4.0.</a></p>
                    </div>
                    <div className="col-md-4 footer-column">
                        <h6 className="footer-heading">Menu</h6>
                        <ul className="list-unstyled footer-menu">
                            <li className="footer-menu-item">Our Work</li>
                            <li className="footer-menu-item">About Us</li>
                            <li className="footer-menu-item">Services</li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <h6 className="footer-heading">Contact</h6>
                        <ul className="list-unstyled footer-menu">
                            <li className="footer-menu-item">Get a Quote</li>
                            <li className="footer-menu-item">Say Hi</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;