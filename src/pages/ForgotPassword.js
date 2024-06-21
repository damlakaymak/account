import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState , useCallback } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const ForgotPassword = () => {

const [email,setEmail] = useState("");

const handdleSubmit = useCallback((e)=>{
e.preventDefault();

if(!email){
                  return;
}
sendPasswordResetEmail(auth,email).then(()=>{

alert("we have sent you a reset  password emmail. Chech your inbox. Itmay takes 5 min")

})
.catch((e)=>{
      console.log(e)            
})


},[email])


  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Forgot Password</h1>

      <form 
      className="flex flex-col gap-4 mt-8"
      onSubmit={handdleSubmit}>
        <input
        onChange={e =>setEmail(e.currentTarget.value)}
          className="p-4 bg-gray-100 text-sm"
          type="email"
          placeholder="enter your email"
        />
        <input
       className="p-4 bg-pink-300 text-sm"
          type="submit"
          value="Send reset password  email"
        />

        
<Link className='text-sm' to={"/sign-up"}>Back to sign in</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
