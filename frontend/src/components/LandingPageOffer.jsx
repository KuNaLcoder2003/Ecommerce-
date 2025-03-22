// import React, { useState , useEffect } from 'react'
// import { motion } from 'framer-motion'

// const LandingPageOffer = () => {

//     const deadline = '2025-06-31T23:59:59'
//     const calculateTimeLeft = () => {
//         const difference = new Date(deadline) - new Date();
//         return difference > 0 ? Math.floor(difference / 1000) : 0;
//       };
//     const [seconds, setSeconds] = useState(calculateTimeLeft);
//     useEffect(() => {
//         if (seconds <= 0) return;
        
//         const timer = setInterval(() => {
//           setSeconds((prev) => prev - 1);
//         }, 1000);
    
//         return () => clearInterval(timer);
//       }, [seconds]);

//       const formatTime = (secs) => {
//         const days = Math.floor(secs / (24 * 3600));
//         const hours = Math.floor((secs % (24 * 3600)) / 3600);
//         const minutes = Math.floor((secs % 3600) / 60);
//         const remainingSeconds = secs % 60;
//         return `${days < 10 ? "0" : ""}${days} : ${hours < 10 ? "0" : ""}${hours} : ${minutes < 10 ? "0" : ""}${minutes} : ${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//       };

//     return (
//         <div className='w-[88%] m-auto p-[0.8rem] flex items-center justify-center'>
//             <motion.div
//                 initial={{ opacity: 0, x: 150 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -150 }} // Animation when leaving viewport
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: false }}
//                 className='flex-[2] relative rounded-md overflow-hidden ' >

//                 <div className='w-[90%] flex gap-[1rem] items-center justify-center'>

//                     <img src='https://codewithsadee.github.io/glowing/assets/images/offer-banner-1.jpg' className='w-[32%]' />
//                     <img src='https://codewithsadee.github.io/glowing/assets/images/offer-banner-2.jpg' className='w-[40%]' />

//                 </div>
//             </motion.div>

//             <motion.div
//                 initial={{ opacity: 0, y: -100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 100 }} // Animation when leaving viewport
//                 transition={{ duration: 0.6, delay: 0.7 }}
//                 viewport={{ once: false }} className='flex-[1] h-[400px] relative  rounded-md overflow-hidden '>


//                 <div className='flex flex-col w-[full] gap-[1.7rem]'>
//                     <div className='flex items-center gap-[10px]'>
//                         <p className='text-xl text-stone-500 font-semibold'>Specail Offer</p>
//                         <p className='px-[5px] py-[2px] rounded-md w-[70px] bg-green-800 text-white text-center'>20%</p>
//                     </div>

//                     <div className='flex flex-col gap-[1rem]'>
//                         <h2 className='text-4xl text-black'>Mountain Pine Bath Oil</h2>
//                         <p className='text-stone-400 text-md'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
//                     </div>

//                     <div className='flex w-[full] p-[0.5rem] items-center gap-[1rem] text-5xl font-bold text-slate-500'>
//                         {formatTime(seconds)}
//                     </div>

//                     <button className='w-[40%] py-[10px] border-2 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 border-black'>Get only $39.00</button>
//                 </div>
//             </motion.div>
//         </div>
//     )
// }

// export default LandingPageOffer

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LandingPageOffer = () => {
    const deadline = '2025-06-30T23:59:59'; // Fixed invalid date (June has 30 days)

    const calculateTimeLeft = () => {
        const difference = new Date(deadline) - new Date();
        return difference > 0 ? Math.floor(difference / 1000) : 0;
    };

    const [seconds, setSeconds] = useState(calculateTimeLeft);

    useEffect(() => {
        if (seconds <= 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    const formatTime = (secs) => {
        const days = Math.floor(secs / (24 * 3600));
        const hours = Math.floor((secs % (24 * 3600)) / 3600);
        const minutes = Math.floor((secs % 3600) / 60);
        const remainingSeconds = secs % 60;
        return `${days < 10 ? "0" : ""}${days} : ${hours < 10 ? "0" : ""}${hours} : ${minutes < 10 ? "0" : ""}${minutes} : ${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    return (
        <div className='w-[90%] mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-6'>
            <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className='md:flex-[2] w-full rounded-md overflow-hidden'>
                <div className='relative flex flex-wrap justify-center items-center gap-4 w-full'>
                    <img src='https://codewithsadee.github.io/glowing/assets/images/offer-banner-1.jpg' className='lg:w-[32%] sm:w-52 md:w-1/3 ' />
                    <img src='https://codewithsadee.github.io/glowing/assets/images/offer-banner-2.jpg' className='lg:w-[40%] sm:w-64 md:w-1/2 ' />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: false }}
                className='md:flex-[1] w-full rounded-md overflow-hidden'>
                <div className='flex flex-col items-center md:items-start w-full gap-6'>
                    <div className='flex items-center gap-3'>
                        <p className='text-lg text-stone-500 font-semibold'>Special Offer</p>
                        <p className='px-2 py-1 rounded-md bg-green-800 text-white text-center'>20%</p>
                    </div>

                    <div className='text-center md:text-left'>
                        <h2 className='text-3xl md:text-4xl text-black font-bold'>Mountain Pine Bath Oil</h2>
                        <p className='text-stone-400 text-sm md:text-md'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                    </div>

                    <div className='flex justify-center md:justify-start text-3xl md:text-5xl font-bold text-slate-500'>
                        {formatTime(seconds)}
                    </div>

                    <button className='w-3/4 md:w-1/2 py-3 border-2 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black'>
                        Get only $39.00
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default LandingPageOffer;

