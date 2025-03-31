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



const ProductsTypes = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full overflow-hidden'>
            <Header isLoggedIn={true} />
            <h1 className='my-[3rem] text-4xl font-bold w-[full] text-center'>Our Collections</h1>

            {/*  */}
            <Banners desc={"Discover OurDiscover Our Latest Collection for women"} url={""} url1={""} />

            <BannerReverse desc={"Discover OurDiscover Our Latest Collection for men"} />

            <Brands />

            <div className='w-[85%] overflow-hidden m-auto'>
                <h2 className='text-3xl font-bold text-center my-[3rem]'>Shop By category</h2>
                <Category desc={"Check out mens formal collections"} desc1={"Check out mens casual collections"} url1={"https://perkclothing.com/cdn/shop/articles/Frame_265.jpg?v=1688715804"} url={"https://www.westside.com/cdn/shop/articles/formal_wear_for_men.jpg?v=1677133164"} />
                <Banners url={"https://fastarz.com/wp-content/uploads/2024/01/AdobeStock_171195989-min.jpg"} url1={"https://media.istockphoto.com/id/515788534/photo/cheerful-and-confidant.jpg?s=612x612&w=0&k=20&c=T0Z4DfameRpyGhzevPomrm-wjZp7wmGjpAyjGcTzpkA="} desc={"Womens casual collections"} btnText={true} desc1={"Womens formal wear"} />
                <Category desc={"Women's casual collection"} desc1={"Women's formal collection"} url={"https://www.joviindia.com/cdn/shop/files/291A8587.jpg?v=1736143032&width=533"} url1={"https://asukacouture.com/cdn/shop/files/ethnic_wear_for_men_in_hydereabad.jpg?v=1727082720&width=1080"} />
                <BannerReverse />
            </div>

            <Footer />
        </div>
    )
}

export default ProductsTypes
