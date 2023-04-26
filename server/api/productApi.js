import express from 'express';
const router = express.Router();
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct ,getMyProducts} from '../controllers/product-controller.js';
import { verifyToken } from '../controllers/user-controller.js';
const product = function () {
    router.post('/create', verifyToken, createProduct)
    router.post('/update/:id', verifyToken, updateProduct)
    router.delete('/delete/:id', verifyToken, deleteProduct)
    router.get('/get-all', verifyToken, getAllProducts)
    router.get('/get-my-all', verifyToken, getMyProducts)
    router.get('/:id', verifyToken, getProduct)




    return router;
}

export default product;