import React from 'react'
import './CompoMessa9.css'
import './CompoMessa10.css'
const CompoMessa10 = () => {
  return (
    <>
    <div>
       <h1>page 10</h1>
      <div className="nav">
        <img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
        <h6 className='right-side'>AAV INNOVATION LABS</h6>
        {/* <h4>component configuration list</h4> */}
        <h3 className='wel_sanjay1'>Display-Component Master</h3>
        <h3 className='wel_sanjay'>Welcome Sanjay Kumar</h3>
         <div className="placed">
             <img className='moves' src="data:image/png;base64,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" alt="" />
        <img src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-question-mark-vector-icon-png-image_1824218.jpg" alt="" className='moves' />
        <img src="https://t4.ftcdn.net/jpg/01/09/46/77/360_F_109467767_JwzMoMf9EMEaPedIfwXIDquzwjENZQjj.jpg" alt="" className='moves' />
         </div>
    </div>
    </div>
    

       
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
<div className='btnTop-1234'>

<button className='btn-change'>CHANGE</button><br/>
<button className='btn3'>RESET</button><br/>

  <select className='opi' id='language'>
                        <option disabled selected value="--">Minimize</option>
                      
            </select>  

            <a href='/'> <img className='logo' style={{height:"22px", width:"fit-content"}} src='
https://media.istockphoto.com/id/1298834280/vector/pdf-icon-major-file-format-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=uA4lg3z8Od32TGuT6zOhMkEVJqH2kCE-_OI8ybalmac=' alt=""  /> </a>
</div>

<h5 className='Total-rec'>Total Records:1</h5>
<div className='margin-between'>
<div classname="container">
    <div classname="py-4">
    
      <table className="table border shadow">
        <thead className="thead-primary">
          <tr>
          <th scope="col">List No</th>
            <th scope="col">Component Type</th>
      <th scope="col">Component Control No</th>
      <th scope="col">Revision</th>
      <th scope="col">CM Franchise Key</th>
      <th scope="col">CM Status</th>
      <th scope="col">On Hold</th>
      <th scope="col">Content File</th>
      <th scope="col">Alternate Reference NO</th>
      <th scope="col">CM CNN Source</th>
      <th scope="col">CM CNN Change Order NO</th>
      <th scope="col">RSC Change Order NO</th>
      <th scope="col">Created By</th>
      <th scope="col">Created On</th>
      <th scope="col">Approval Histroy</th>  
      <th scope="col"></th>      
          </tr>
        </thead>
          <tbody>  
          
    <tr>
      <th scope="row">1</th>
      <td>Dynamic Lavel</td>
      <td>HD19122022</td>
      <td>A</td>
      {/* option */}
      <select className='opi' id='language'>
                        <option disabled selected value="--">BWI</option>
                        <option value="English">BWI</option>
                        <option value="Français">CNV</option>
                        <option value="español">DPS</option>
                        <option value="Deutsch">EES</option>
                        <option value="Português">ETH</option>
                      
            </select>  

    
      <td> <select className='opi' id='language'>
                        <option disabled selected value="--">APPROVED</option>
                      
            </select> </td>
      <td></td>
      <td></td>
      <td>852</td>
      <td>ERP Number</td>
     
      <td>123456</td>
      <td>C-10050527</td>
      <td>HDwarapu</td>
      <td>DEC 19,2022</td>
     
      <td><img className='logo' style={{height:"30px", width:"fit-content"}} src='data:image/png;base64,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' alt=""  /></td>

    </tr> 
  </tbody>
      </table>
    </div>
  </div>
  </div>

  <div className='box-color'>
  <div className='btnTop23'>

<div className='left-delete-1'><button className='delete1'><img className='logo' style={{height:"22px", width:"fit-content"}} src='
data:image/png;base64,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' alt=""  />DELETE</button></div>

<div className='btn-right-1'>
<button className='btn23'>SAVE</button><br/>
<button className='btn245'>SAVE & SUBMIT FOR APPROVAL</button><br/>
</div>

</div>
  </div>
    </> 
  )
}

export default CompoMessa10
