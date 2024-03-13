const mongoose =require("mongoose") ;

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    required:true,
  },
  userstatus:{
    type:Number,
    required:true,
    default:1,
  },industry:{
    type:String,
    required:true,
    default:"-"
  },
  dateofRegister:{
    type:Date,
    required:true,
    default:"-"
  }
});

module.exports = mongoose.model("User", userSchema)
