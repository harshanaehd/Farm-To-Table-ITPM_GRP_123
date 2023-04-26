import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const saultRounds = 10;// number of salt rounds for bcrypt hashing


export const register = async (req, res) => {
    const { username, email, userType, password } = req.body;

    bcrypt.hash(password, saultRounds, async (err, hash) => {
        const newUser = new User({
            username,
            email,
            password: hash,
            userType,
        });
        await User.findOne({ email }).then((user) => {
            user ? res.send({ Error: "Email already in use" }) : newUser.save().then((user) => res.send({ message: "Registration Success" })).catch((err) => res.send({ Error: err }));
        }).catch((error) => res.send(error.message));
    });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.send({ message: "Invalid Email" });
    } else {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err || !result) {
                res.send({ message: "Password not valid" });
            } else {
                jwt.sign({ user }, 'secretkey', (err, token) => {
                    res.json({ token, usertype: user.usertype });
                });
            }
        });
    }
};

export const getAllCustomers = async (req, res) => {
    // const search = req.headers["data"];
    // const query = search === "" ? {} : { email: { $regex: search } };
    User.find().then((data) => res.status(200).send(data)).catch((error) => res.status(500).send(error.message));
};

export const verifyToken = async (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader && bearerHeader.split(' ')[1];
    if (token == null) {
        res.sendStatus(401);
    } else {
        jwt.verify(token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.user = authData;
                next();
            }
        });
    }
};

export const UserInfo = async (req, res) => req.user ? res.json(req.user) : res.send({ message: "Token not valid" });
