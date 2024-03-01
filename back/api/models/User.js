// const mongoose = require("mongoose")
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    //add more fields if required
    //insed each field, define
    username:{
        type: String,
        required: true,
        //ensures no repetition
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    profilePic:{
        type: String,
        default: ""
    }
    },
{ timestamps: true } //update time
);

//structure to export from mongoose
// mongoose.exports = 
// const User = mongoose.model("User", UserSchema);
// module.exports = User

export default UserSchema;