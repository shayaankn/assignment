// src/WhatWeDo.js

import React from 'react';

const WhatWeDo = () => {
    return (
        <div className="what-we-do">
            <div className="row">
                <div className="col-md-5">
                    <h4>What we do</h4>
                    <p>Lexogrine specializes in multiple types of services - from custom software development to team
                        augmentation and body leasing. Our experienced team of experts will help you choose the right
                        solution for your business.</p>
                </div>
                <div className="col-md-7">
                    <ul className="custom-list">
                        <li>Web & Software Development</li>
                        <li>Mobile Development</li>
                        <li>AI & Data Science</li>
                        <li>Design</li>
                        <li>Strategy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;