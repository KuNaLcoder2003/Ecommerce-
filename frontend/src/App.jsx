


import Banners from './components/Banners'
import BestSellerCard from './components/BestSellerCard'
import Cards from './components/Cards'
import Header from './components/Header'
import Hero from './components/Hero'
import { motion } from 'framer-motion'

function App() {


  return (

    <div className=''>

      <Header />
      <Hero/>
      <Cards/>

      {/* Bestsellers */}

      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }} // Animation when leaving viewport
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className='w-[85%] flex items-center gap-[10px] p-[1rem] overflow-x-auto scroll-smooth snap-x snap-mandatory p-[1rem] m-auto 
      group scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-500 hover:scrollbar-track-gray-300'>
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-01.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-02.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-03.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-04.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-05.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-06.jpg'} />
      </motion.div>

      {/* Under $25 */}

      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }} // Animation when leaving viewport
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className='w-[85%] flex items-center gap-[20px] p-[1rem] overflow-x-auto scroll-smooth snap-x snap-mandatory p-[1rem] m-auto 
      group scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-500 hover:scrollbar-track-gray-300'>
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-07.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-08.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-09.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-10.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-11.jpg'} />
        <BestSellerCard url={'https://codewithsadee.github.io/glowing/assets/images/product-01.jpg'} />
      </motion.div>

      <Banners/>


    </div>

  )
}

export default App
