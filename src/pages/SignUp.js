import React, { useCallback, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";


const SignUp =  () => {
  const [name,setName] = useState("")

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =  useCallback(
    (e) => {
      e.preventDefault();

      if (!email || !password || !name) {
        return;
      }

      console.log(email, password);
       createUserWithEmailAndPassword(auth, email, password,name)
       .then((auth)=>{
        updateProfile(auth.user, {displayName:name})
       })
        .catch((e) => {
          alert("Check your mail and password pls");
        });
    },
    [email, password,name]
  );

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Create New Account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">


      <input
          type="text"
          placeholder="Enter your name"
          className="p-4 bg-gray-100 text-sm"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />




        <input
          type="email"
          placeholder="Enter your Email"
          className="p-4 bg-gray-100 text-sm"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          type="password"
          placeholder="Enter your passsword"
          className="p-4 text-sm bg-gray-100"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <input 
        value={"Sign Up"}
        type="submit" className="p-4 bg-blue-700 text-sm" />
        <Link className="text-sm" to={"/sign-in"}>Aldready have an account? Sign in</Link>
      </form>
    </div>
  );
};

export default SignUp;
