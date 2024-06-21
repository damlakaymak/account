import React, { useCallback, useState } from 'react'
import { signInWithEmailAndPassword }  from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const SignIn = () => {


   const [email,setEmail] = useState("");
   const [password,setPassword]= useState("");


const handleSubmit = useCallback((e) =>{

  e.preventDefault()
  if(!email | !password){

    alert("check your e mail and password pls")
  }

  signInWithEmailAndPassword(auth,email,password)

  .catch(()=>{
    alert("check your email and password pls")
  })




},[email,password])

  return (
    <div  className="max-w-md mx-auto py-12">
   <h1 className="text-2xl">Sign İn</h1>
   <form  className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>

<input
       className="p-4 bg-gray-100 text-sm"
value={email}
onChange={(e)=>setEmail(e.currentTarget.value)}
type='email' placeholder='Enter your email'/>
<input
       className="p-4 bg-gray-100 text-sm"
onChange={(e)=>setPassword(e.currentTarget.value)}  value={password} type="password" placeholder="Enter your password "/>


<Link className='text-sm ml-auto' to={"/forgot-password"}>Forgot password</Link>
<input 
value={"Sign in"}
className="p-4 bg-pink-300 text-sm"
type='submit'/>





<Link className='text-sm' to={"/sign-up"}>Dont have an account ? Sign up</Link>

   </form>
    </div>
  )
}

export default SignIn
