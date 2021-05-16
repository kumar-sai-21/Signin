const mongoose =require('mongoose')

const signuptemplate = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('mytable',signuptemplate)