import React, {  useState } from 'react'
import '../Styles/Login.scss'
import { setLogin } from '../Redux/State';
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const dispatch=useDispatch()
  const  navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const response=await fetch ("http://localhost:3001/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
               },
               body:JSON.stringify({email,password})
    });
     // Check if response is successful
     if (!response.ok) {
      // If response is not successful, throw an error
      throw new Error('Failed to log in');
    }

    //getdata after fetching

    const loggedIn=await response.json()
if(loggedIn){
  dispatch(
    setLogin({
      user:loggedIn.user,
      token:loggedIn.token
    })
  );
  navigate("/")
  
} else {
  // If loggedIn is falsy, show an error message
  toast.error('Password is incorrect');
  
}


    }
    catch(err){
      console.log("Login failed",err.message);
     toast.error('Failed to log in. Please try again.');
    }
    
  }
  
  return (
    <div className='login'>
       <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
      <div className="login_content">
        <form className='login_content_form' onSubmit={handleSubmit}>

<input type="email" placeholder='Email' value={email} 

onChange={(e)=>setEmail(e.target.value)}

required />

<input type="password" placeholder='Password' 
value={password}
onChange={(e)=>setPassword(e.target.value)}
required />

<button type='submit'>LOG IN</button>



        </form>

        <a href="/register">Don't have an account?Sign In Here</a>
      </div>


    </div>
  )
}

export default Login