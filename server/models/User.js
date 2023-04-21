import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    userType : {
        type : String,
        required : false
    },
})

const User = mongoose.model("users",userSchema)

export default User;
