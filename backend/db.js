const mongoose = require('mongoose')
const dotenv = require('dotenv');


dotenv.config();

mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.log(err);
})

const User_Schema = new mongoose.Schema({
    first_name: {
        required: true,
        unique: false,
        type: String,
    },
    last_name: {
        required: true,
        unique: false,
        type: String,
    },
    username: {
        required: true,
        unique: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    role: {
        type: String,
        required: true
    },
    avatar : {
        type : String,
    },
    carts: [{
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ecomm_carts_table'
        },
        checkout: {
            type: Boolean,
            required: true
        }
    }],
    orders: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ecomm_orders_table'
        }
    }],
    balance : {
        type : Number,
        required : true
    }
}, { timestamps: true })

const Products_Schema = new mongoose.Schema({
    product_name: {
        required: true,
        type: String
    },
    category: {
        type: String,
        required: true
    },
    product_description: {
        required: true,
        type: String
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    product_images: [{
        url: {
            type: String
        },
        public_id: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true })

const Review_Schema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomm_products_table'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomm_users_table'
    },
    comment: {
        type: String,
        required: true
    }
})

const Rating_Schema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomm_products_table'
    },
    upVotes: {
        type: Number,
    },
    downVotes: {
        type: Number
    }
}, { timestamps: true })

const Order_Schema = new mongoose.Schema({
    products: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ecomm_products_table',
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomm_users_table',
        required: true,
    },

    total_amount: {
        type: Number,
        required: true
    },

    payment_status: {
        type: String,
        required: true
    },
    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomm_carts_table',
        required: true,
    }

}, { timestamps: true })

const Cart_Schema = new mongoose.Schema({
    items: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ecomm_products_table',
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomm_users_table',
        required: true
    },
    checked_out: {
        type: Boolean,
    }
}, { timestamps: true })

const Transaction_schema = new mongoose.Schema({
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomm_users_table',
        required: true
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomm_users_table',
        required: true
    },
    amount: {
        type: Number,
        required: true
    }

}, { timestamps: true })

const Users = mongoose.model('ecomm_users_table', User_Schema);
const Products = mongoose.model('ecomm_products_table', Products_Schema);
const Reviews = mongoose.model('ecomm_reviews_table', Review_Schema);
const Ratings = mongoose.model('ecomm_ratings_table', Rating_Schema);
const Orders = mongoose.model('ecomm_orders_table', Order_Schema);
const Carts = mongoose.model('ecomm_carts_table', Cart_Schema);
const Transactions = mongoose.model('ecomm_transactions_table', Transaction_schema)

module.exports = {
    Users,
    Products,
    Reviews,
    Ratings,
    Orders,
    Carts,
    Transactions,
}
