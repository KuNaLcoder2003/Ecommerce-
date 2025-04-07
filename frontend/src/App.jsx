


import { Routes , Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import { useEffect, useState } from 'react'
import ProductsTypes from './pages/ProductsTypes'
import AdminDashboard from './components/AdminDasboard'


function App() {

  const [loggedIn , setIsLoggedIn] = useState(false);
  const [isAdmin , setIsAdmin] = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  } , [loggedIn])

  useEffect(()=>{
    const role = localStorage.getItem('role');
    if(role == 'Admin'){
      setIsAdmin(true);
    }
    else {
      setIsAdmin(false);
    }
  },[isAdmin])

  // if(isAdmin) {
  //   return (
  //     <AdminDashboard setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn}  />
  //   )
  // }

  return (

    <Routes>
      <Route path='/' element={loggedIn ?  <LandingPage isLoggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} /> : <SignInPage setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
      <Route path='/admin' element={loggedIn && isAdmin ? <AdminDashboard setIsLoggedIn={setIsLoggedIn}setIsAdmin={setIsAdmin} /> : <SignInPage setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/signin' element={<SignInPage setIsLoggedIn={setIsLoggedIn}setIsAdmin={setIsAdmin} />} />
      <Route path='/signup' element={<SignUpPage setLoggedIn={setIsLoggedIn} />} />
      <Route path='/collections' element={loggedIn ? <ProductsTypes/> : <SignInPage  setLoggedIn={setIsLoggedIn}/>} />

    </Routes>

    

  )
}

export default App
