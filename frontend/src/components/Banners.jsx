import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Banners = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[88%] m-auto p-[0.8rem] flex items-center gap-[15px]'>
            <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -150 }} // Animation when leaving viewport
            transition={{ duration: 0.6 }}
            viewport={{ once: false }} 
            className='flex-[2] h-[400px] relative bg-center bg-cover group rounded-md overflow-hidden bg-black text-white' >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                    style={{ backgroundImage: `url(https://codewithsadee.github.io/glowing/assets/images/banner-1.jpg)` }}
                ></div>

                <div className="relative z-10 flex flex-col w-[36%] h-full p-6 text-stone-800">

                    <p className="text-lg font-medium mt-2">New Collection</p>
                    <h2 className="text-3xl font-bold">Discover Our Autumn Skincare</h2>


                    {/* Shop Now Button */}
                    <div className="absolute bottom-6 flex items-center gap-2 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-1 text-black">
                        <p onClick={()=>navigate('/signin')} >Shop Now</p>
                        <ArrowRight />
                    </div>
                </div>


            </motion.div>

            <motion.div 
            
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }} // Animation when leaving viewport
            transition={{ duration: 0.6 ,delay : 0.7 }}
            viewport={{ once: false }}className='flex-[1] h-[400px] relative bg-center bg-cover group rounded-md overflow-hidden bg-black text-white'>
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                    style={{ backgroundImage: `url(https://codewithsadee.github.io/glowing/assets/images/collection-3.jpg)` }}
                ></div>
            </motion.div>
        </div>


    )
}

export default Banners
