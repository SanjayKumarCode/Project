import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Signup.css'


const schema=yup.object().shape({
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    Address:yup.string().required(),
  
  
  // contact no
  Contact:yup.number('Option to Extend').required().min(0),
  
  
    email:yup.string().email().required(),
    age:yup.number().required().positive().integer(),
    password:yup.string().min(4).max(10).required(),
    confirmPassword:yup.string().oneOf([yup.ref("password"),null]),
  })



const Signup = () => {
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
      });
      const submitForm=(data)=>{
        console.log(data);
      }




  return (
    <>
     <div className=" Form-Validation">

     <div className="inputs">

     <form className="Animation" onSubmit={handleSubmit(submitForm)}>
      
     <input type="text" name="firstName" placeholder="firstname" {...register ('firstName')}/> 
     {errors.lastName && <p>Please enter firstName</p>}
     <br/> 
  
      
     <input type="text" name="lastName" placeholder="lastname" {...register ('lastName')}/> 
     {errors.lastName && <p>Please enter lastName</p>}
     <br/> 
   

     <input type="text" name="Address" placeholder="Address" {...register ('Address')}/> 
     {errors.Address && <p>Please enter Address</p>}
     <br/> 

     
     <input type="text" name="Contact" placeholder="Contact"{...register('Contact')}/>
     {errors.Contact && <p>Plsase contact number </p>}
     <br/>

     <input type="text" name="email" placeholder="email" {...register ('email')}/>
      {errors.email && <p>Please enter email</p>}
      <br/>  

     <input type="text" name="age" placeholder="age" {...register ('age',{pattern:/\d+/})}/> 
     {errors.age &&<p>Please Enter age</p>}
     <br/> 

     <input type="text" name="password" placeholder="password" {...register ('password')}/>
     {errors.password && <p>Please enter password</p>}
     <br/>

     <input type="text" name="confirmPassword" placeholder="confirmPassword" {...register ('confirmPassword')}/>
     {errors.confirmPassword && <p>Please Correct password</p>}
     <br/> <br/> 
     <input type="submit" id="submit"/>
     
     </form>
     </div>  
     </div>
     </>
    
  );
}

export default Signup
