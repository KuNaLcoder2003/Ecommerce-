import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banners from '../components/Banners'
import BannerReverse from '../components/BannerReverse'
import Brands from '../components/Brands'
import Category from '../components/Category'



const ProductsTypes = ({ url = '', desc = "", btnText = false }) => {
    const navigate = useNavigate()
    return (
        <div className='w-full overflow-hidden'>
            <Header isLoggedIn={true} />
            <h1 className='my-[3rem] text-4xl font-bold w-[full] text-center'>Our Collections</h1>

            {/*  */}
            <Banners desc={"Discover Latest Collection for women"} url={""} url1={""} />

            <BannerReverse desc={"Discover Latest Collection for men"} />

            <Brands />

            <div className='w-[85%] overflow-hidden m-auto'>
                <h2 className='text-3xl font-bold text-center my-[3rem]'>Shop By category</h2>
                <Category desc={"Check out mens formal collections"} desc1={"Check out mens casual collections"} url1={"https://perkclothing.com/cdn/shop/articles/Frame_265.jpg?v=1688715804"} url={"https://www.westside.com/cdn/shop/articles/formal_wear_for_men.jpg?v=1677133164"} />
                <Banners url={"https://fastarz.com/wp-content/uploads/2024/01/AdobeStock_171195989-min.jpg"} url1={"https://media.istockphoto.com/id/515788534/photo/cheerful-and-confidant.jpg?s=612x612&w=0&k=20&c=T0Z4DfameRpyGhzevPomrm-wjZp7wmGjpAyjGcTzpkA="} desc={"Womens casual collections"} btnText={true} desc1={"Womens formal wear"} />
                <Category desc={"Women's ethnic collection"} desc1={"Men's ethnic collection"} url={"https://www.joviindia.com/cdn/shop/files/291A8587.jpg?v=1736143032&width=533"} url1={"https://asukacouture.com/cdn/shop/files/ethnic_wear_for_men_in_hydereabad.jpg?v=1727082720&width=1080"} />
                {/* <BannerReverse /> */}

                <div className='flex flex-col items-center'>

                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -150 }} // Animation when leaving viewport
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className=' w-[80%] m-auto h-[450px] relative bg-center bg-cover group rounded-md overflow-hidden bg-black text-white' >
                    <div
                        className="md:bg-[40%] absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                        style={{ backgroundImage: `url(${url ? url : "https://cdn.prod.website-files.com/66dffa95f947b62fb545cc4d/66ef070c6c82ec49512c3e63_Analyzing%20Sports%20Apparel%20Preferences%20-%20Men%20and%20Women.webp"})` }}
                    ></div>

                    

                </motion.div>

                <div className="relative z-10 flex flex-col w-[36%] h-full p-6 text-stone-800 flex flex-col gap-[1rem] items-center">

                        {/* <p className="text-lg font-medium mt-2 text-black">New Collection</p> */}
                        <h2 className={`text-3xl font-bold w-[500px] text-black`}>{desc ? desc : "Our wide range Sports Collection"}</h2>


                        {/* Shop Now Button */}
                        <div className={`flex items-center gap-2 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-1 ${btnText ? `text-white` : "text-black"}`}>
                            <p onClick={() => navigate('/signin')} >Shop Now</p>
                            <ArrowRight />
                        </div>
                    </div>
                </div>


            </div>

            <Footer />
        </div>
    )
}

export default ProductsTypes
