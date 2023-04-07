/**
 * Created by IntelliJ IDEA
 * User : Dinusha Ariyarathna
 * Date : 07/04/2022
 * Time : 2:46 PM
 */

import express from 'express';
import bodyParser from 'body-parser';
import mongoose, {  mongo } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cors());

// Routes //


// MONGO DB

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

	/* only add data once */
	// Product.insertMany(dataProduct);
	// ProductStat.insertMany(dataProductStat);
	// User.insertMany(dataUser);

}).catch((error) => console.log(`${error} did not connect`));