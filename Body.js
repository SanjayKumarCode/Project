import './Body.css'
import Axios from "axios";

import React, {useState } from 'react'


const Body  =()=> {
  const [oldData, setData]=useState("") ;
  

const getData= (sanju) =>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${sanju}`).then((res) =>{
        setData(res.data[0].excuse);
      
    });
 };

return (

    // jsx file
   <div className="Body">

      <div className="But">

       <button  onClick={ ()=>getData("family")}>Family</button>
       <button  onClick={ ()=>getData ("office")}>Office</button>
       <button  onClick={()=>getData ("gaming")}>Gaming</button>  
       <button  onClick={()=>getData ("party")}>Party</button>  
       <button  onClick={()=>getData ("college")}>College</button> 
    </div>

    <div className="para">
       <div className="Text"><p style={{color : "red"}}>{oldData}</p></div>
       </div>
       
   </div>


   
)
  
}
export default Body



