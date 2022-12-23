import React from 'react'
import './CompoMessage.css'
import Popup from './Popup'

// import  { useState, useEffect } from "react";
// import axios from "axios";

const CompoMessage = () => {
  // const [users, setUser] = useState([]);

  // useEffect(() => {
  //   loadUsers();
  // }, []);
// [] this is dependency otherwise code run infinite time


  // take data from API
  // const loadUsers = async () => {
  //   const result = await axios.get("http://localhost:3004/users");
  //   setUser(result.data.reverse());
  //   // console.log(result);
  // };
  return (
    <>

<Popup/>

    
<div className='top1'>
      <div id="6">

      <div className='display'>

      <div className='red'>*</div>
      {/* 1 */}
          <label className='blue'>Component Type </label><br/></div>
          
          <select className='opi' id='language'>
                        <option disabled selected value="--">Dynamic Label</option>
                        <option value="English">English</option>
                        <option value="Français">Français</option>
                        <option value="español">español</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="Português">Português(Brasile)</option>
                      
            </select>        
        </div>
        
{/* 2 */}
<div className='top3'>
          <div className='display3'>
      <div className='red'>*</div>
          <label className='blue'>Component Control No </label><br/></div>

          <input className='Revision'  type="text" name="ontrol" placeholder="HD19122022"/>
          </div>



{/* 3 */}

<div className='top3'>
          <div className='display3'>
      <div className='red'>*</div>
          <label className='blue'>Revision </label><br/></div>

          <input className='Revision'  type="text" name="revision" placeholder="A"/>
          </div>

 </div>




{/* button */}
<div className='btnTop'>
<button className='btn1'>ASSIGN PRODUCT/CUNTRY</button><br/>
<button className='btn2'>COUNTRY CODE</button><br/>
<button className='btn3'>RESET</button><br/>
{/* <button className='btn1'>MASTER</button> */}

  <select className='opi' id='language'>
                        <option disabled selected value="--">MASTER</option>
                      
            </select>  

            <a href='/'> <img className='logo' style={{height:"22px", width:"fit-content"}} src='
https://media.istockphoto.com/id/1298834280/vector/pdf-icon-major-file-format-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=uA4lg3z8Od32TGuT6zOhMkEVJqH2kCE-_OI8ybalmac=' alt=""  /> </a>
</div>

{/* Table */}

<br/>
  <div classname="container">
    <div classname="py-4">
    
      <table className="table border shadow">
        <thead className="thead-primary">
          <tr>
            <th scope="col">Component Type</th>
      <th scope="col">Component Control No</th>
      <th scope="col">Revision</th>
      <th scope="col">CM Franchise Key</th>
      <th scope="col">CM Status</th>
      <th scope="col">On Hold</th>
      <th scope="col">Contact File</th>
      <th scope="col">Alternate Reference No</th>
      <th scope="col">CM CNN Source</th>
      <th scope="col">CM CNN Change Order No</th>
      <th scope="col">RSC Change Order NO</th>
      <th scope="col">Created By</th>
      <th scope="col">Created On</th>
      <th scope="col">Approval Histroy</th>
          
          </tr>
        </thead>
          <tbody>
    <tr>
      
      <td>Dynamic Lavel</td>
      <td>HD19122022</td>
      <td>A</td>
      <td>BWI</td>
      <td>APPROVED</td>
      <td></td>
      <td></td>
      <td>852</td>
      <td>ERP Number</td>
      <td>123456</td>
      <td>c-100505527</td>
      <td>HDwarapu</td>
      <td>Dec 19,2022</td>
      <td><img className='logo' style={{height:"30px", width:"fit-content"}} src='data:image/png;base64,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' alt=""  /></td>
    </tr> 
    
  </tbody>
  
      </table>
    </div>
  </div>

  {/* table 2 */}
  <div className='table2'>Total No.of Records:2</div>
  <div classname="container">
    <div classname="py-4">
    
      <table className="table border shadow">
        <thead className="thead-primary">
          <tr>
          <th scope="col">List No</th>
            <th scope="col">Component Type</th>
      <th scope="col">Component Control No</th>
      <th scope="col">Revision</th>
      <th scope="col">CA Franchise Key</th>
      <th scope="col">Product Code</th>
      <th scope="col">Variant/Mode Code</th>
      <th scope="col">Ship to Country</th>
      <th scope="col">CA Status</th>
      <th scope="col">On Hold</th>
      <th scope="col">Franchise</th>
      <th scope="col">Product Description</th>
      <th scope="col">Content File</th>
      <th scope="col">Alternate Reference No</th>
      <th scope="col">CA CCN Source</th>
          
          </tr>
        </thead>

       

          <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Dynamic Lavel</td>
      <td>HD19122022</td>
      <td>A</td>
      <td>DPS</td>
      <td>1891135408S</td>
      <td></td>
      <td>Vanuatu</td>
      <td>CREATED</td>
      
      <td>DEPUY SPINE</td>
      <td>COUGAR LS 18x8x35...</td>
      <td></td>
      <td></td>
      <td>852</td>
      <td><select className='opi' id='language'> 
                        <option disabled selected value="--">Source</option>
                      
            </select> </td>
     
    </tr> 
    <tr>
      <th scope="row">2</th>
      <td>Dynamic Lavel</td>
      <td>HD19122022</td>
      <td>A</td>
      <td>DPS</td>
      <td>1891135408S</td>
      <td></td>
      <td>Vanuatu</td>
      <td>CREATED</td>
      <td></td>
      <td>DEPUY SPINE</td>
      <td>COUGAR LS 18x8x35...</td>
      <td></td>
      <td>852</td>
      <td><select className='opi' id='language'> 
                        <option disabled selected value="--">Source</option>
                      
            </select> </td>
    </tr> 
  </tbody>
      </table>
    </div>
  </div>


    </>
  )
}

export default CompoMessage
