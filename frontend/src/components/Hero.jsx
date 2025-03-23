import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

let arr = [
  {
    url: 'https://codewithsadee.github.io/glowing/assets/images/hero-banner-1.jpg',
    heading: `Reveal The Beauty of Skin`,
    desc: 'Made using clean, non-toxic ingredients, our products are designed for everyone.',
    price: 'Starting at $7.99',
  },
  {
    url: 'https://codewithsadee.github.io/glowing/assets/images/hero-banner-2.jpg',
    heading: 'Reveal The Beauty of Skin',
    desc: 'Made using clean, non-toxic ingredients, our products are designed for everyone',
    price: 'Starting at $7.99',
  },
  {
    url: 'https://codewithsadee.github.io/glowing/assets/images/hero-banner-3.jpg',
    heading: 'Reveal The Beauty of Skin',
    desc: 'Made using clean, non-toxic ingredients, our products are designed for everyone',
    price: 'Starting at $7.99',

  }
]

const Hero = () => {

  const navigate = useNavigate();
  return (
  

    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -150 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: false }}
      className="w-full h-[34rem] my-6 flex overflow-x-auto gap-4 px-4 scroll-smooth lg:px-10 snap-x snap-mandatory scrollbar-hide hover:scrollbar-default"
    >
      {arr.map((obj, index) => (
        <div
          key={index}
          className="rounded-md min-w-full md:min-w-[80%] lg:min-w-[100%] relative h-full bg-cover bg-center snap-start"
          style={{ backgroundImage: `url(${obj.url})` }}
        >
          <div className="absolute top-1/3 left-5 flex flex-col gap-4 w-4/5 md:w-1/2 lg:w-1/3">
            <h1 className="text-2xl md:text-4xl font-bold text-black">{obj.heading}</h1>
            <p className="text-stone-700 text-sm md:text-lg">{obj.desc}</p>
            <p className="text-lg md:text-xl font-semibold text-black">{obj.price}</p>
            <button onClick={()=>navigate('/signin')} className="w-32 md:w-40 py-2 md:py-3 text-white bg-black rounded-md hover:bg-white hover:text-black border-2 border-gray-600 transition">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </motion.div>

  )
}

export default Hero
