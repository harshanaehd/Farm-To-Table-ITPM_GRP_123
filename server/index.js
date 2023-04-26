/**
 * Created by IntelliJ IDEA
 * User : Dinusha Ariyarathna
 * Date : 07/04/2022
 * Time : 2:46 PM
 */

import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import user from './api/userApi.js';
import product from './api/productApi.js';

dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log("Mongo DB Connection success");
}).catch((error) => console.log(`${error} did not connect`));



app.use('/user', user())
app.use('/product', product())


app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));