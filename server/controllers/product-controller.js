import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    try {
        req.body.users = req.user.user._id
        const newProduct = new Product(req.body);
        const response = await newProduct.save()
        res.send({ message: "New Product Created", data: response })
    } catch (error) {
        res.send(error)
        console.log(error);
    }
};

export const updateProduct = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    try {
        const id = req.params.id
        const response = await Product.findByIdAndUpdate(id, req.body);
        res.send({ message: "Updated succesfully", data: response })
    } catch (error) {
        res.send(error)
        console.log(error);
    }
};


export const getProduct = async (req, res) => {
    try {
        const id = req.params.id
        const response = await Product.findById(id)
        res.send({ message: "Success", data: response })
    } catch (error) {
        res.send(error)
        console.log(error);
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const response = await Product.find()
        res.send({ message: "Success", data: response })
    } catch (error) {
        res.send(error)
        console.log(error);
    }
};

export const getMyProducts = async (req, res) => {
    try {
        console.log(req.user);
        console.log(req.user.user._id);
        const response = await Product.find({ users: req.user.user._id })
        res.send({ message: "Success", data: response })
    } catch (error) {
        res.send(error)
        console.log(error);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const response = await Product.findByIdAndRemove(id)
        res.send({ message: "Deleted successfully", data: response })
    } catch (error) {
        res.send(error)
        console.log(error);
    }
};

