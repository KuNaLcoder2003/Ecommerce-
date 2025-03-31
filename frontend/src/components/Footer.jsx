import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        // <div className='flex flex-col w-full mt-[50px] bg-slate-100 p-[2rem] gap-[5rem]'>

        //     {/* Part 1 */}
        //     <div className='flex items-baseline justify-around'>

        //         <div className='flex flex-col items-center gap-[10px]'>

        //             <h3 className='text-lg font-bold'>Company</h3>
        //             <div className='w-[80%] text-center'>
        //                 <p className='text-stone-600'>Find a location nearest you. See <span className='font-bold cursor-pointer text-black'>Our Stores</span></p>
        //             </div>

        //             <div className='flex flex-col gap-[2px] items-center'>
        //                 <p className='text-md font-bold'>+91-8302697878</p>
        //                 <p className='text-md'>kunalindia59@gmail.com</p>
        //             </div>

        //         </div>


        //         <div className='flex flex-col items-center gap-[10px]'>
        //             <h3 className='text-lg font-bold'>Information</h3>
        //             <div className='flex flex-col gap-[7px] items-center text-center text-stone-700'>
        //                 <p className='cursor-pointer'>New Products</p>
        //                 <p className='cursor-pointer'>Best Sellers</p>
        //                 <p className='cursor-pointer'>Bundle & save</p>
        //                 <p className='cursor-pointer'>Online Gift Card</p>
        //             </div>

        //         </div>


        //         <div className='flex flex-col items-center gap-[10px]'>
        //             <h3 className='text-lg font-bold'>Company</h3>
        //             <div className='flex flex-col gap-[7px] items-center text-center text-stone-700'>
        //                 <p className='cursor-pointer'>Start a return</p>
        //                 <p className='cursor-pointer'>Contact us</p>
        //                 <p className='cursor-pointer'>Shipping FAQ</p>
        //                 <p className='cursor-pointer'>Terms and conditions</p>
        //                 <p className='cursor-pointer'>Privacy & policy</p>
        //             </div>
        //         </div>


        //         <div className='flex flex-col gap-[25px]'>
        //             <div className='flex flex-col gap-[8px]'>
        //                 <h2 className='text-2xl font-bold'>Good Emails</h2>
        //                 <p className='w-[70%] text-stone-700 font-semibold'>Enter your email below to be the first to know about new collections and product launches.</p>
        //             </div>

        //             <div className='flex items-center'>

        //                 <input className='py-[1rem] w-[65%] px-[1rem] rounded-md' placeholder='your email'/>

        //                 <button className='w-[20%] py-[1rem] bg-black text-white text-center rounded-md'>Subscribe</button>

        //             </div>
        //         </div>

        //     </div>

        //     {/* Part 2 */}
        //     <div className='flex items-baseline justify-around w-full'>

        //         <div className='flex text-md gap-[1rem] items-center'>
        //             <p className='text-md'>© 2025 kunalSingh</p>
        //             <Twitter size={16} className='cursor-pointer' />
        //             <Instagram size={16} className='cursor-pointer' />
        //             <Facebook size={16} className='cursor-pointer' />
        //             <Mail size={16} className='cursor-pointer' />
        //         </div>

        //         <div className=''>
        //             <h1 className='text-5xl font-bold'>Glowing</h1>
        //         </div>

        //         <div className=''>

        //             <img src='https://codewithsadee.github.io/glowing/assets/images/pay.png' />

        //         </div>



        //     </div>

        // </div>

        <div className='flex flex-col w-full mt-12 bg-slate-100 p-8 gap-[5rem] overflow-hidden'>
            {/* Part 1 */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left w-full'>
                {/* Company Info */}
                <div className='flex flex-col items-center lg:items-start gap-4'>
                    <h3 className='text-lg font-bold'>Company</h3>
                    <p className='text-stone-600'>Find a location nearest you. See <span className='font-bold cursor-pointer text-black'>Our Stores</span></p>
                    <div className='flex flex-col gap-1 items-center lg:items-start'>
                        <p className='text-md font-bold'>+91-8302697878</p>
                        <p className='text-md'>kunalindia59@gmail.com</p>
                    </div>
                </div>
                
                {/* Information */}
                <div className='flex flex-col items-center lg:items-start gap-4'>
                    <h3 className='text-lg font-bold'>Information</h3>
                    <div className='flex flex-col gap-2 text-stone-700'>
                        <p className='cursor-pointer'>New Products</p>
                        <p className='cursor-pointer'>Best Sellers</p>
                        <p className='cursor-pointer'>Bundle & Save</p>
                        <p className='cursor-pointer'>Online Gift Card</p>
                    </div>
                </div>
                
                {/* Customer Service */}
                <div className='flex flex-col items-center lg:items-start gap-4'>
                    <h3 className='text-lg font-bold'>Support</h3>
                    <div className='flex flex-col gap-2 text-stone-700'>
                        <p className='cursor-pointer'>Start a Return</p>
                        <p className='cursor-pointer'>Contact Us</p>
                        <p className='cursor-pointer'>Shipping FAQ</p>
                        <p className='cursor-pointer'>Terms & Conditions</p>
                        <p className='cursor-pointer'>Privacy Policy</p>
                    </div>
                </div>
                
                {/* Newsletter */}
                <div className='flex flex-col gap-4 items-center lg:items-start'>
                    <h2 className='text-2xl font-bold'>Good Emails</h2>
                    <p className='text-stone-700 font-semibold text-center lg:text-left'>Enter your email below to be the first to know about new collections and product launches.</p>
                    <div className='flex w-full max-w-sm'>
                        <input className='flex-[2] p-3 rounded-l-md border border-gray-300' placeholder='Your email' />
                        <button className='px-4 py-3 bg-black text-white rounded-r-md'>Subscribe</button>
                    </div>
                </div>
            </div>
            
            {/* Part 2 */}
            <div className='flex flex-col md:flex-row items-center justify-between w-full gap-6'>
                <div className='flex text-md gap-4 items-center'>
                    <p className='text-md'>&copy; 2025 kunalSingh</p>
                    <Twitter size={20} className='cursor-pointer' />
                    <Instagram size={20} className='cursor-pointer' />
                    <Facebook size={20} className='cursor-pointer' />
                    <Mail size={20} className='cursor-pointer' />
                </div>
                <h1 className='text-5xl font-bold'>Glowing</h1>
                <img src='https://codewithsadee.github.io/glowing/assets/images/pay.png' className='w-[20%]' alt='Payment Methods' />
            </div>
        </div>
    )
}

export default Footer
