import React from 'react'
import ssm from './Card.module.css'
import { BiTransfer } from 'react-icons/bi';
import { GrAnalytics } from 'react-icons/gr';
import { FaDatabase } from 'react-icons/fa';
const Card = () => {
  return (
    <>
     <div className={ssm.top}>

{/* sec */}



<diV className={ssm.secTop}>
<diV className={ssm.Icon12}><BiTransfer size={30}/>
<h5 style={{fontSize:"20px"}}>Transactional App </h5>
<button className={ssm.btn1}>Enter Button</button>

</diV>
<div className={ssm.smallBox}></div>
</diV>
{/* top 2 */}

<diV className={ssm.secTop}>
<diV className={ssm.Icon12}><GrAnalytics size={30}/>
<h5 style={{fontSize:"20px"}}>Analytical App </h5>
<button className={ssm.btn1}>Enter Button</button>

</diV>
<div className={ssm.smallBox}></div>
</diV>
{/* top 3 */}
<diV className={ssm.secTop}>
<diV className={ssm.Icon12}><FaDatabase size={30}/>
<h5 style={{fontSize:"20px"}}>Data Cockpit </h5>
<button className={ssm.btn1}>Enter Button</button>

</diV>
<div className={ssm.smallBox}></div>
</diV>
</div>

    
    </>
  )
}

export default Card
