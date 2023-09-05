           import React from 'react';
import './Navbar.css';
// import { TbHexagon3D } from 'react-icons/tb';
// import { useState } from 'react';
// import RegistrationForm from '../pages/Popup';
// import Popup from '../pages/Popup';

const Navbar = () => {
  // const [showForm, setShowForm] = useState(false);
  // const handleFormToggle = () => {
  //   setShowForm(!showForm);
  // }; 
  return (
    <div className="top">
      <nav className="navbar">
        <div className="logo-container">
        <a href="https://tarality.com" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}> 
          <div className="logo">Tarality</div>
          </a>
        </div>      
        <div className="nav-links">
          <ul>
           {/* <li><button onClick={handleFormToggle} className="nav-button">Deposit</button></li>
           {showForm && <Popup handleClose={handleFormToggle} />} */}
          <li><button className="nav-button">Lottery</button></li>
          <li><button className="nav-button">Wallet</button></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
