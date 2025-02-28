const zod = require('zod')


const signup_schema = zod.object({
    first_name : zod.string(),
    last_name : zod.string(),
    username : zod.string().email(),
    password : zod.string()
})

const signin_schema = zod.object({
    username : zod.string(),
    password : zod.string()
})


module.exports = {
    signup_schema,
    signin_schema,
}