import express from 'express';
const router = express.Router();
import { register, login, UserInfo ,verifyToken,getAllCustomers} from '../controllers/user-controller.js';

const user = function () {
    router.post('/register', register)
    router.post('/login', login)
    router.get('/info', verifyToken, UserInfo)
    router.get('/getAllCustomers', getAllCustomers)

    return router;
}

export default user;