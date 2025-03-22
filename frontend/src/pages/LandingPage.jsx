import React from 'react'

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Cards />

      {/* Bestsellers */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="w-full sm:w-full md:w-[90%] flex items-center gap-[10px] overflow-x-auto scroll-smooth snap-x snap-mandatory m-auto 
        group scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-500 hover:scrollbar-track-gray-300"
      >
        {[
          'product-01.jpg',
          'product-02.jpg',
          'product-03.jpg',
          'product-04.jpg',
          'product-05.jpg',
          'product-06.jpg',
        ].map((img, index) => (
          <BestSellerCard key={index} url={`https://codewithsadee.github.io/glowing/assets/images/${img}`} />
        ))}
      </motion.div>

      {/* Under $25 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="w-full sm:w-full md:w-[90%] flex items-center gap-[10px] overflow-x-auto scroll-smooth snap-x snap-mandatory m-auto 
        group scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-500 hover:scrollbar-track-gray-300"
      >
        {[
          'product-07.jpg',
          'product-08.jpg',
          'product-09.jpg',
          'product-10.jpg',
          'product-11.jpg',
          'product-01.jpg',
        ].map((img, index) => (
          <BestSellerCard key={index} url={`https://codewithsadee.github.io/glowing/assets/images/${img}`} />
        ))}
      </motion.div>

      <Banners />
    </div>
  )
}

export default LandingPage
