const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        // required:[true,"this field is required!"],
        unique:true,
        trim:true,
        maxlength:150
    },
    role:String
})