import React from 'react'
import { motion } from "framer-motion"
// import * as motion from "motion/react-client"
// import { Variants } from "motion/react"


const Brands = () => {
    return (
        // <div className='flex flex-col gap-[1rem] justify-center items-center overflow-hidden '>

        //     <h2 className='text-3xl font-bold mt-[3rem] '>Shop By Brands</h2>

        //     <div className='lg:flex w-[80%] lg:items-center lg:overflow-hidden lg:justif-center'>
        //         <div className='relative w-[60%] min-w-[60%] sm:min-w-[20%] p-2 m-auto'>

        //             {/* Product Image */}
        //             <div className='h-[400px] sm:h-[350px] w-[80%] rounded-md overflow-hidden '>
        //                 <img src={'https://miro.medium.com/v2/resize:fit:1056/1*7FSSHUxqyAVVissHDgpocg.png'} alt='Not available' className='w-full h-full object-cover rounded-md' />
        //             </div>
        //         </div>
        //         <div className='relative w-[60%] min-w-[60%] sm:min-w-[20%] p-2 m-auto'>

        //             {/* Product Image */}
        //             <div className='h-[400px] sm:h-[350px] w-[80%] rounded-md overflow-hidden'>
        //                 <img src={'https://www.ladylux.com/images/articles/HM_Christmas_faces_final_image_1320869641.jpg'} alt='Not available' className='w-full h-full object-cover rounded-md' />
        //             </div>
        //         </div>
        //         <div className='relative w-[60%] min-w-[60%] sm:min-w-[20%] p-2 m-auto'>

        //             {/* Product Image */}
        //             <div className='h-[400px] sm:h-[350px] w-[80%] rounded-md overflow-hidden'>
        //                 <img src={'https://www.fusionmodelsnyc.com/image/1482/Vnhx9w4DaGT4j78bUaT1_M.JPG'} alt='Not available' className='w-full h-full object-cover rounded-md' />
        //             </div>
        //         </div>

        //         {/* <div className='relative w-[60%] min-w-[60%] sm:min-w-[20%] p-2 m-aut0'>


        //             <div className='h-[400px] sm:h-[350px] w-[80%] rounded-md overflow-hidden'>
        //                 <img src={'https://www.fusionmodelsnyc.com/image/1482/Vnhx9w4DaGT4j78bUaT1_M.JPG'} alt='Not available' className='w-full h-full object-cover rounded-md' />
        //             </div>
        //         </div> */}


        //     </div>

        //     <div className='flex w-[80%] items-center overflow-hidden justif-center'>
        //         <div className='relative w-[60%] min-w-[60%] sm:min-w-[20%] p-2 m-auto'>


        //             <div className='h-[400px] sm:h-[350px] w-[80%] rounded-md overflow-hidden'>
        //                 <img src={'https://images.jdmagicbox.com/comp/def_content_category/fabindia/fabindia-39-z7u6t.jpg'} alt='Not available' className='w-full h-full object-cover rounded-md' />
        //             </div>
        //         </div>
        //         <div className='relative w-[60%] min-w-[60%] sm:min-w-[20%] p-2 m-auto'>


        //             <div className='h-[400px] sm:h-[350px] w-[80%] rounded-md overflow-hidden'>
        //                 <img src={'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/977348d3-6f71-4157-857f-428b0266d76a/nike-lookbook.jpg'} alt='Not available' className='w-full h-full object-cover rounded-md' />
        //             </div>
        //         </div>
        //         <div className='relative w-[60%] min-w-[60%] sm:min-w-[20%] p-2 m-auto'>


        //             <div className='h-[400px] sm:h-[350px] w-[80%] rounded-md overflow-hidden'>
        //                 <img src={'https://www.fashiongonerogue.com/wp-content/uploads/2022/10/United-Colors-Benetton-Fall-Winter-2022-Campaign02.jpg'} alt='Not available' className='w-full h-full object-cover rounded-md' />
        //             </div>
        //         </div> 




        //     </div>



        // </div>

        <div className="flex flex-col gap-[1rem] justify-center items-center overflow-hidden w-full">

            <h2 className="text-3xl font-bold mt-[3rem]">Shop By Brands</h2>

            {/* First Row */}
            <div className="flex flex-wrap lg:flex-nowrap w-[80%] justify-center items-center gap-4">
                {[
                    "https://miro.medium.com/v2/resize:fit:1056/1*7FSSHUxqyAVVissHDgpocg.png",
                    "https://www.ladylux.com/images/articles/HM_Christmas_faces_final_image_1320869641.jpg",
                    "https://www.fusionmodelsnyc.com/image/1482/Vnhx9w4DaGT4j78bUaT1_M.JPG",
                ].map((src, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }} // Animation when leaving viewport
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        key={index} className="relative w-full sm:w-[60%] lg:w-[33%] p-2">
                        <div className="h-[400px] sm:h-[350px] w-full rounded-md overflow-hidden">
                            <img src={src} alt="Not available" className="w-full h-full object-cover rounded-md" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap lg:flex-nowrap w-[80%] justify-center items-center gap-4">
                {[
                    "https://images.jdmagicbox.com/comp/def_content_category/fabindia/fabindia-39-z7u6t.jpg",
                    "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/977348d3-6f71-4157-857f-428b0266d76a/nike-lookbook.jpg",
                    "https://www.fashiongonerogue.com/wp-content/uploads/2022/10/United-Colors-Benetton-Fall-Winter-2022-Campaign02.jpg",
                ].map((src, index) => (
                    <motion.div key={index} 
                    initial={{ opacity: 0, x: -100 }}
                        
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }} // Animation when leaving viewport
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="relative w-full sm:w-[60%] lg:w-[33%] p-2">
                        <div className="h-[400px] sm:h-[350px] w-full rounded-md overflow-hidden">
                            <img src={src} alt="Not available" className="w-full h-full object-cover rounded-md" />
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
        // <>
        // <ScrollTriggered/>
        // </>

    )
}
function ScrollTriggered() {
    return (
        <div className='flex flex-col w-full gap-[10rem]' style={container}>
            {food.map(([emoji, hueA, hueB], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </div>
    )
}

function Card({ emoji, hueA, hueB, i }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileHover="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                {emoji}
            </motion.div>
        </motion.div>
    )
}

// whileInView="onscreen"

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

const food = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
]
export default Brands


