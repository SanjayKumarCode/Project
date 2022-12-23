import './CompoMessa7.css'
import React,{useState} from "react";
import {IoIosPerson} from "react-icons/io";
import {SlLock} from "react-icons/sl";
import {FaFileSignature} from"react-icons/fa";


const CompoMessa7 = () => {
  return (
    <>
    <section>
           
            <form >
            <h1>page 7</h1>
                <header style={{backgroundColor:"rgb(175, 31, 31)",color:"white",height:"30px",textAlign:"center",fontFamily:"revert"}}> <FaFileSignature size="14px"></FaFileSignature>ELECTRONIC SIGNATURE</header>
                <div className='dancing'><h1 className="logo" >Project Demo</h1></div>
                
                <label for = "sign"></label>
                <IoIosPerson color="rgb(109, 107, 107)" size="18px"></IoIosPerson>
                <input className='size123'  type="signature" placeholder="AKumarG5" id="sign" name="sign"/>
                <br></br>  <br></br>
                <label for = "password"></label>
                <SlLock color="rgb(109, 107, 107)" size="18px"></SlLock>
                <input className='size123'  type="password" placeholder="***" id="password" name="password"/>
                <br /> <br /> <br /> <br /> <br />
                <h4 style={{fontSize:"20px",color:"rgb(146, 138, 138)"}}>I Approve the Record(s)</h4>
                <br />  <br />
                <button style={{backgroundColor:"rgb(248, 31, 31)",color:"white",width:"110px",height:"30px" ,border:"none",borderRadius:"4px"}}>CONFIRM</button>
                <button style={{backgroundColor:"rgb(0, 110, 255)",color:"white",width:"110px",height:"30px" ,border:"none",borderRadius:"4px",marginLeft:"10px"}}>CANCEL</button>
             

        </form>
        </section>
    </>
  )
}

export default CompoMessa7
