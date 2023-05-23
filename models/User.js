const mongoose = require("mongoose")

const userSchema =  mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    active:{
        type: Boolean,
        default: true
    },
})
module.exports = mongoose.model("user", userSchema)