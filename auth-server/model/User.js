const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique: true,
            validate: [validator.isEmail , "please provide email"],
        },
        password:{
            type:String,
            required:true,
            minlength:8,
            select:false,
        },
        passwordConfirm:{
            type : String,
            required:true,
            minlength:8,
            select:false,
            validate:{
                validator:function(el){
                    return el === this.password;
                },
                message: "Password doesn't match",
            },
        },
        isVerified:{
            type:Boolean,
            default:false,
            select:false,
        },
        otp:{
            type:Number,
        },
        role:{
            type:String   
            // yaha se sagar karega !!!
        }
    }
)