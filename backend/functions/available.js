const { Products } = require("../db");

async function getAvailable(items){
    let availableCount = 0;
    let available = [];
    let notAvailable = [];
    await Promise.all(
        items.map(async(item) => {
            try {
                const res = await Products.findOne({_id : item.id})

                if(res.quantity > 0 && res.quantity >= item.quantity){
                    availableCount++;
                    available.push(item)
                }
                else {
                    notAvailable.push(item)
                }
                
            } catch (error) {
                console.log(error)
                notAvailable.push(item);
            }
        })
    )
    return {availableCount , available , notAvailable}
}

module.exports = getAvailable