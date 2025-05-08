import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
  class:{type:String,required:true},
  subject:{type:String,required:true},
  book:{type:String,required:true}
})

const bookModel=mongoose.models.books || mongoose.model("books",bookSchema);

export default bookModel;