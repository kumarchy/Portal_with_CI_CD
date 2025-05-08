import bookModel from "../models/bookModel.js";
import fs from 'fs';

//add books

const addBooks=async(req,resp)=>{

  const book_filename=`${req.file.filename}`;

  const book=new bookModel({
    class:req.body.class,
    subject:req.body.subject,
    book:book_filename
  })

  try{
     await book.save();
     resp.json({success:true,message:"Book Added Successfully"});
  }catch(error){
     resp.json({success:false,message:"Error"});
  }
}

//get book by className api
const getBook=async(req,resp)=>{
  const className=req.params.class;
  try{
    const book = await bookModel.find({class:className}, { subject: 1, book: 1, _id: 0 });

    if(!book || book.length===0){
      return resp.json({success:false,message:"No books found for this class"});
    }
    resp.json({success:true,data:book});
  }catch(error){
    console.log(error);
    resp.json({success:false,message:"Error"});
  }
}

//get all book list api

const bookList=async (req,resp)=>{
  try{
   let books=await bookModel.find({});
   resp.json({success:true,data:books});
  }catch(error){
   resp.json({success:false,message:"Error"});
  }
}

// remove book list

const removeBook = async (req,resp)=>{
  try{
   const book=await bookModel.findById(req.body.id);
   fs.unlink(`/uploads/${book.book}`,()=>{});
   await bookModel.findByIdAndDelete(req.body.id);
   resp.json({success:true,message:"Book Removed Successfully"});
  }catch(error){
   resp.json({success:false,message:"Error"});
  }
}

export {addBooks,getBook,bookList,removeBook};