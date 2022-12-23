import React from 'react'
import './CompoMessage.css'
import Navbar from './Navbar';
import Popup from './Popup'
// import  { useState, useEffect } from "react";
// import axios from "axios";

const CompoMessa2 = () => {
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
    <h1>page 3</h1>
    <Navbar/>
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
      <td>APPROVED</td>
      <td></td>
      <td></td>
      <td>852</td>
      <td>ERP Number</td>
      <td>123456</td>
      <td>c-100505527</td>
      <td>HDwarapu</td>
      <td>Dec 19,2022</td>
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
      <th scope="col">CA CNN Source</th>
      <th scope="col">CA CNN Change Order No</th>
      <th scope="col">RSC Site</th>
      <th scope="col">RSC Site Readiness Flag </th>
      <th scope="col">Component Qty </th>
      <th scope="col">U M</th>
          
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
      <td></td>
      <td>DEPUY SPINE</td>
      <td>COUGAR LS 18x8x35...</td>
      <td></td>
      <td>852</td>
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
      <td>SUBMITTED FOR APPROVAL</td>
      <td> PLM Other</td>
      <td>100002</td>
      <td>Courcelles...</td>
      <td>NA</td>
      <td>1</td>
      <td>EA</td>
    </tr> 
  </tbody>
      </table>
    </div>
  </div>



{/* <div className='btn-bottom'>
  <button className='btn45'>SAVE</button><br/>
<button className='btn246'>SAVE & SUBMIT FOR APPROVAL</button><br/>

</div> */}
<div className='btnTop23'>

<div className='left-delete'><button className='delete1'><img className='logo' style={{height:"22px", width:"fit-content"}} src='
data:image/png;base64,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' alt=""  />DELETE</button></div>

<div className='btn-right'>
<button className='btn1'>SAVE</button><br/>
<button className='btn2'>SAVE & SUBMIT FOR APPROVAL</button><br/>
</div>

</div>


    </>
  )
}

export default CompoMessa2
