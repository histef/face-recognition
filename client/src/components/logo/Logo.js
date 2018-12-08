import React from 'react';

import Tilt from 'react-tilt'

import './Logo.css';
import scLogo from'./SC-logo.PNG';

const Logo = () => {
  return (
    <div className='ma3 mt0'>
      <Tilt className="Tilt shadow-2" options={{ max : 25 }} style={{ height: 125, width: 125 }} >
        <div className="Tilt-inner">
          <img src={scLogo} alt='logo' />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;