


import { Routes , Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import { useEffect, useState } from 'react'
import ProductsTypes from './pages/ProductsTypes'


function App() {

  const [loggedIn , setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  } , [])

  return (

    <Routes>
      <Route path='/' element={loggedIn ? <LandingPage isLoggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} /> : <SignInPage/>} />
      <Route path='/signin' element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/signup' element={<SignUpPage setLoggedIn={setIsLoggedIn} />} />
      <Route path='/collections' element={loggedIn ? <ProductsTypes/> : <SignInPage  setLoggedIn={setIsLoggedIn}/>} />
    </Routes>

    

  )
}

export default App
