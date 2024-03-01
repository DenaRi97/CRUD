// const mongoose = require("mongoose")
import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    //same structure as user model
    title:{
        type: String,
        required: true,
        unique: true
    },
    content:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: true,
    },
    categories:{
        //array will go here later
        type: Array,
        required: false
    },
    },
{ timestamps: true } //update time
);

export default PostSchema;

//structure to export from mongoose
// const Post = mongoose.model("Post", PostSchema);
// module.exports = Post