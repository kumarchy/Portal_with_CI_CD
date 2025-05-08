import mongoose from "mongoose";

const lectureSchema=new mongoose.Schema({
  class:{type:String,requied:true},
  subject:{type:String,required:true},
  unitName:{type:String,required:true},
  topicName:{type:String,required:true},
  lectureVideo:{type:String,required:true},
  lectureNote:{type:String,required:true},
})

const lectureModel=mongoose.models.lecture || mongoose.model("lecture",lectureSchema);

export default lectureModel;