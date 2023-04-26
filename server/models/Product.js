import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
},


    {
        timestamps: true
    })

const Product = mongoose.model("products", productSchema)

export default Product;
