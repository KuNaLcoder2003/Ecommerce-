const { Products } = require('../db')

async function getAvailableProducts(cart) {

    if (cart.lenngth == 0) {
        return []
    }
    let available_products = await Promise.all(
        cart.map(async (product) => {
            try {
                const result = await Products.findOne({ _id: product.id })
                if (result.quantity > 0) {
                    let quantity;
                    if(result.quantity >= product.quantity) {
                        quantity = product.quantity
                    } 
                    else if(product.quantity > result.quantity) {
                        quantity = result.quantity
                    }
                    else {
                        quantity = Math.abs(result.quantity - product.quantity)
                    }
                    return {
                        id : result._id,
                        product_name : result.product_name,
                        image : result.product_images[0].url,
                        quantity,
                        individual_price : result.price
                    }
                }
                else {
                    return {
                        id : result._id,
                        product_name : result.product_name,
                        image : result.product_images[0].url,
                        quantity : 0,
                        individual_price : result.price
                    }
                }
            } catch (error) {
                return null;
            }
        })
    )
    return available_products;

}

module.exports = getAvailableProducts;