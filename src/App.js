import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Text1 from './Text1.js';
import Clients from './Clients.js';
import Text2 from './Text2.js';
import WhatWeDo from './WhatWeDo.js';
import Stats from './Stats.js';
import Text3 from './Text3.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Text1 />
      <Clients />
      <Text2 />
      <WhatWeDo />
      <Stats />
      <Text3 />
      <Footer />
    </div>
  );
}

export default App;