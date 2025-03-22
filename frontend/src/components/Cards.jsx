import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'
const Cards = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }} // Animation when leaving viewport
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className='my-[5rem] w-[100%] flex justify-center items-center p-[1rem] overflow-x-hidden gap-[30px]'>
            <Card url={'https://codewithsadee.github.io/glowing/assets/images/collection-1.jpg'} heading={'Summer Collection'} para={'Strting at $17.99'} />
            <Card url={'https://codewithsadee.github.io/glowing/assets/images/collection-2.jpg'} heading={'What’s New?'} para={'Get the glow'} />
            <Card url={'https://codewithsadee.github.io/glowing/assets/images/collection-3.jpg'} heading={'Buy 1 get 1'} para={'Starting at $7.99'} />
        </motion.div>
    )
}

export default Cards
