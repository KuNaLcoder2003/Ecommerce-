import { Repeat, ShoppingBag, Star } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BestSellerCard = ({ url }) => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div 
      onMouseEnter={() => setSideBar(true)} 
      onMouseLeave={() => setSideBar(false)} 
      className='relative min-w-[40%] sm:min-w-[20%] p-2'
    >
      {/* Product Image */}
      <div className='h-[300px] sm:h-[350px] w-full rounded-md overflow-hidden'>
        <img src={url} alt='Not available' className='w-full h-full object-cover rounded-md' />
      </div>

      {/* Product Details */}
      <div className='flex flex-col items-center mt-2'>
        <p className='font-semibold text-md'>$29.00</p>
        <p className='text-sm sm:text-base'>Product Name</p>
      </div>

      {/* Sidebar (Appears on Hover) */}
      {sideBar && <SideBar className="absolute right-2 top-16 sm:right-4 sm:top-20" />}
    </div>
  );
};

const SideBar = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col items-center gap-3 sm:gap-4 cursor-pointer w-[50px] sm:w-[55px] ${className}`}
    >
      {[ShoppingBag, Star, Repeat].map((Icon, index) => (
        <div key={index} className='w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full flex justify-center font- items-center text-stone-800 bg-white'>
          <Icon/>
        </div>
      ))}
    </motion.div>
  );
};

export default BestSellerCard;

