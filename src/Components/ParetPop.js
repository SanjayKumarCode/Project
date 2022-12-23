import React from 'react'


const ParetPop = ({toggle, setToggle}) => {
    const closeHandle = () => {
        setToggle(!toggle);
    };
  return (
    <>
    <div className='container'>
      <div className='pop'>
      <div className='subttl'>
      <p style={{color: "white", cursor: "pointer"}}>X</p>
      <p className='center1'>Component Assignment System Massage</p>
<p onClick={closeHandle} style={{color: "white", cursor: "pointer"}}>X</p>
      </div>
     
     <div>
     <p>The Assignment(s) has been received and is being processed for updating UI.</p></div>
     {/* <button>btn</button> */}
     </div>



     </div>
    </>
  )
}

export default ParetPop
