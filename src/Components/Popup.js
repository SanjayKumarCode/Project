import React, { useState } from 'react'
import ParetPop from './ParetPop';
import './Popup.css'
const Popup = () => {
    const [toggle, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(!toggle);
    };
  return (
    <>
      <div className='pop'>
     {/* <button onClick={toggleHandler}>PopUp</button> */}
     {/* <button onClick={toggleHandler}></button> */}
      <div className='poptop'>
      <ParetPop/>
      {/* {toggle ?  <ParetPop/> } */}
      {/* {toggle ? <ParetPop toggle={toggle} setToggle={setToggle} />:null} */}
   
      </div>
      </div>
     

     
    </>
  )
}

export default Popup
