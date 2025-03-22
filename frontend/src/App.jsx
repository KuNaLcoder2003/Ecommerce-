


import { Routes , Route } from 'react-router-dom'
import Banners from './components/Banners'
import BestSellerCard from './components/BestSellerCard'
import Cards from './components/Cards'
import Header from './components/Header'
import Hero from './components/Hero'
import { motion } from 'framer-motion'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'


function App() {


  return (

    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/auth' element={<AuthPage/>} />
    </Routes>

    

  )
}

export default App
