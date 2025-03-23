import React from 'react'
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Card = ({url , heading , para}) => {
  const navigate = useNavigate();
  return (    
    <div className="relative group w-full max-w-sm h-[400px] rounded-lg overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-4">
        <h2 className="text-xl md:text-2xl font-bold">{heading}</h2>
        <p className="text-sm md:text-lg font-medium mt-2">{para}</p>
        <div className="absolute bottom-4 flex items-center gap-2 cursor-pointer font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
          <p onClick={()=>navigate('/signin')} >Shop Now</p>
          <ArrowRight />
        </div>
      </div>
    </div>
  )
};



export default Card
