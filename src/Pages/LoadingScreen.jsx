import React from 'react';
import Logo from '../Components/Images/Logomark2.png';

export default function LoadingScreen() {
  return (
    <div className="loading-overlay">
      <img src={Logo} alt="Loading" className="loading-image" />
      <p>Loading, please wait...</p>
    </div>
  );
}
