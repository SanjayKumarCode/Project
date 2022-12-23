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
      <p className='center1'>Workflow System Massage</p>
<p onClick={closeHandle} style={{color: "white", cursor: "pointer"}}>X</p>
      </div>
     
     <div>
     <p>Component Assignment(s) is Approved</p></div>
     {/* <button>btn</button> */}
     </div>



     </div>
    </>
  )
}

export default ParetPop
