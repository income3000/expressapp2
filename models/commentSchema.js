const mongoose= require('mongoose')


const commentSchema = new mongoose.Schema(
 { 
   name:String,
   body:String
  },
  {
    timestamps: true,
  },

);
module.exports = commentSchema;