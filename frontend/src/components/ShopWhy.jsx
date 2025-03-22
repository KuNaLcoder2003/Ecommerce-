import React from 'react'

const data = [
    {
        url: 'https://codewithsadee.github.io/glowing/assets/images/feature-1.jpg',
        heading: 'Guaranteed PURE',
        text: 'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients',
    },
    {
        url: 'https://codewithsadee.github.io/glowing/assets/images/feature-2.jpg',
        heading: 'Completely Cruelty-Free',
        text: 'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients',
    },
    {
        url: 'https://codewithsadee.github.io/glowing/assets/images/feature-3.jpg',
        heading: 'Ingredient Sourcing',
        text: 'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients',
    }
]

const ShopWhy = () => {
    return (
        <div className='w-[85%] m-auto my-[5rem] flex flex-col gap-[2rem]'>
            <h1 className='w-full m-auto text-center text-4xl font-bold'>Why Shop with Glowing?</h1>
            <div className='flex items-center w-full p-[1rem] justify-center gap-[1rem]'>
                {
                    data.map((obj, index) => {
                        return (
                            <div key={`card_${index}`} className='w-[33%] flex flex-col items-center justify-center gap-[1rem]'>
                                <img src={obj.url} alt='img' className='w-[27%]' />
                                <h2 className=''>{obj.heading}</h2>
                                <p className='w-[100%] text-center'>{obj.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShopWhy
