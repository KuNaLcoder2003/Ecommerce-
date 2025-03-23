const zod = require('zod')


const signup_schema = zod.object({
    first_name : zod.string(),
    last_name : zod.string(),
    username : zod.string().email(),
    password : zod.string(),
    role : zod.string(),
    
})

const signin_schema = zod.object({
    username : zod.string(),
    password : zod.string()
})

const products_schema = zod.object({
    product_name : zod.string(),
    category : zod.string() ,
    product_description: zod.string(),
    quantity : zod.number(),
    price : zod.number(),
    product_images : zod.array(zod.object({
        url : zod.string()
    }))
})

module.exports = {
    signup_schema,
    signin_schema,
    products_schema,
}