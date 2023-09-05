import React from 'react';
import '../pages/Popup.css';

const Popup = ({ handleClose }) => {
  return (
    <div className="registration-form">
     <div className='popup_close'><button className='close' onClick={handleClose}>Close</button></div>
      <h2>Registration Form</h2>
     
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Popup;
