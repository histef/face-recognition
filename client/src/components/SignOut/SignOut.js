import React from 'react';
import './SignOut.css';

const SignOut = ({ onRouteChange }) => {
  return (
    <nav style={{display: 'flex', justifyContent:'flex-end'}}>
      <p
        onClick={ () => onRouteChange('signin')}
        className='f3 link dim black pa3 pointer'>Sign Out</p>
    </nav>
  )
}

export default SignOut;