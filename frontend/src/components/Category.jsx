import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';
import Banners from './Banners';
import BannerReverse from './BannerReverse';

const Category = ({ desc , desc1 , url , url1 }) => {
  const navigate = useNavigate()
  return (
    <div className='w-[100%] overflow-hidden m-auto'>
      {/* https://www.westside.com/cdn/shop/articles/formal_wear_for_men.jpg?v=1677133164 */}
      

      <div className='w-[88%] m-auto p-[0.8rem] flex items-center gap-[15px]'>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }} // Animation when leaving viewport
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className='flex-[1] h-[400px] relative bg-center bg-cover group rounded-md overflow-hidden bg-black text-white' >
          <div
            className="md:bg-[50%]  absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
            style={{ backgroundImage: `url(${url})` }}
          ></div>

          <div className="relative z-10 flex flex-col w-[36%] h-full p-6 text-stone-800">

            <p className="text-lg font-medium mt-2">New Collection</p>
            <h2 className="text-3xl font-bold w-[200px]">{desc ? desc : "Discover Our Autumn Skincare"}</h2>


            {/* Shop Now Button */}
            <div className="absolute bottom-6 flex items-center gap-2 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-1 text-black">
              <p onClick={() => navigate('/signin')} >Shop Now</p>
              <ArrowRight />
            </div>
          </div>


        </motion.div>

        {/* 2nd Part */}

        <motion.div

          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }} // Animation when leaving viewport
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: false }} className='flex-[1] h-[400px] relative bg-center bg-cover group rounded-md overflow-hidden bg-black text-white'>
          <div
            className="absolute inset-0 bg-cover bg-contain bg-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
            style={{ backgroundImage: `url(${url1})` }}
          ></div>

          <div className="relative z-10 flex flex-col w-[36%] h-full p-6 text-stone-800">

            <p className="text-lg font-medium mt-2">New Collection</p>
            <h2 className="text-3xl font-bold w-[200px]">{desc1 ? desc1 : "Discover Our Autumn Skincare"}</h2>


            {/* Shop Now Button */}
            <div className="absolute bottom-6 flex items-center gap-2 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-1 text-black">
              <p onClick={() => navigate('/signin')} >Shop Now</p>
              <ArrowRight />
            </div>
          </div>
        </motion.div>

        
      </div>
    </div>
  )
}

export default Category
