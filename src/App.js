import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import AuthLayout from './components/AuthLayout';




const App = () => {
  return (


  <div className='text-bold text-2xl bg-red-200 h-[100vh]' >
    <BrowserRouter>
    <Routes>gg


<Route path='/' element={<MainLayout/>}>
<Route path='/' element={<Home/>}/>

</Route>
   <Route path='/' element={<AuthLayout/>}>
   <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
   </Route>
      
    </Routes>
    
    </BrowserRouter>
    </div>

 

     
 
  )
}

export default App
