import { ArrowRight } from 'lucide-react'
import React from 'react'

const Discover = () => {
    return (
        <div className='w-[90%] m-auto my-[35px] flex flex-col items-center gap-[25px]'>
            <h2 className='text-4xl font-bold m-auto text-center w-full'>More to Dicover</h2>

            <div className='w-full flex items-center p-[10px] justify-center gap-[1rem]'>

                <div className='w-full flex flex-col items-center gap-[15px]'>


                    <div className='relative group w-full max-w-sm h-[280px] rounded-lg overflow-hidden bg-black text-white flex flex-col'>

                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(https://codewithsadee.github.io/glowing/assets/images/blog-1.jpg)` }}
                        ></div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>



                    <div className='relative flex flex-col items-center gap-[10px]'>
                        <p className='text-xl'>Find a store</p>
                        <div className='flex items-center justify-center gap-[3px]'>
                            <p className='text-lg'>Our Store</p>
                            <ArrowRight />
                        </div>
                    </div>

                </div>



                <div className='w-full flex flex-col items-center gap-[15px]'>

                    <div className='relative group w-full max-w-sm h-[280px] rounded-lg overflow-hidden bg-black text-white'>

                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(https://codewithsadee.github.io/glowing/assets/images/blog-2.jpg)` }}
                        ></div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    </div>

                    <div className='relative flex flex-col items-center gap-[10px]'>
                        <p className='text-xl'>Find a store</p>
                        <div className='flex items-center justify-center gap-[3px]'>
                            <p className='text-lg'>Our Store</p>
                            <ArrowRight />
                        </div>
                    </div>

                </div>

                <div className='w-full flex flex-col items-center gap-[15px]'>
                    <div className='relative group w-full max-w-sm h-[280px] rounded-lg overflow-hidden bg-black text-white'>

                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(https://codewithsadee.github.io/glowing/assets/images/blog-3.jpg)` }}
                        ></div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className='relative flex flex-col items-center gap-[10px]'>
                        <p className='text-xl'>Find a store</p>
                        <div className='flex items-center justify-center gap-[3px]'>
                            <p className='text-lg'>Our Store</p>
                            <ArrowRight />
                        </div>
                    </div>

                    
                </div>

            </div>

        </div>
    )
}

export default Discover
