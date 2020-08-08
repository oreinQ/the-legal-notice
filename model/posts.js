const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    posts : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now 
    }
});

mongoose.model("posts", postSchema );