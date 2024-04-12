// src/Clients.js

import React from 'react';
import LogoAcmeBlack from './images/acme-black.png';
import LogoTrevaBlack from './images/treva-black.png';
import LogoFoxHubBlack from './images/fox-hub-black.png';
import LogoCodeLabBlack from './images/code-lab-black.png';

const Clients = () => {
    return (
        <div className="happy-clients">
            <h6>The Who's Who of Happy Clients</h6>
            <div className="brand-names">
                {/* <span className="material-symbols-outlined">library_add</span> */}
                {/* <img className='brand-logo-custom' src="https://logo.clearbit.com/dell.com"></img>
                <img className='brand-logo-custom' src="https://logo.clearbit.com/subway.com"></img>
                <img className='brand-logo-custom' src="https://logo.clearbit.com/imdb.com"></img>
                <img className='brand-logo-custom' src="https://logo.clearbit.com/cnn.com"></img> */}
                <img className='brand-logo-custom' src={LogoAcmeBlack} alt='logo'></img>
                <img className='brand-logo-custom' src={LogoTrevaBlack} alt='logo'></img>
                <img className='brand-logo-custom' src={LogoFoxHubBlack} alt='logo'></img>
                <img className='brand-logo-custom' src={LogoCodeLabBlack} alt='logo'></img>
                {/* <img className='brand-logo-custom' src="https://logo.clearbit.com/converse.com"></img> */}
            </div>
        </div>
    );
};

export default Clients;