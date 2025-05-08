import lectureModel from "../models/lectureModel.js";
import fs from 'fs';

//add lecture video and notes

const addLecture = async (req, resp) => {
  const lectureVideo_filename = req.files.lectureVideo[0].filename; 
  const lectureNote_filename = req.files.lectureNote[0].filename;   

  const lecture = new lectureModel({
    class: req.body.class,
    subject: req.body.subject,
    unitName:req.body.unitName,
    topicName:req.body.topicName,
    lectureVideo: lectureVideo_filename,
    lectureNote: lectureNote_filename
  });

  try {
    await lecture.save();
    resp.json({ success: true, message: "Lecture Video & Note Added Successfully" });
  } catch (error) {
    resp.json({ success: false, message: "Error" });
  }
}

// lecture videos and notes List

const listLecture=async(req,resp)=>{
  try{
    const lectures=await lectureModel.find({});
    resp.json({success:true,data:lectures})
  }catch(error){
    console.log(error);
    resp.json({success:false,message:"Error"})
  }
}

// remove lecture videos and notes

const removeLecture= async(req,resp)=>{
   try{
     const lecture=await lectureModel.findById(req.body.id);
     fs.unlink(`uploads/${lecture.lectureVideo}`,()=>{});
     fs.unlink(`uploads/${lecture.lectureNote}`,()=>{})

     await lectureModel.findByIdAndDelete(req.body.id);
     resp.json({success:true,message:"Lecture Videos and Notes Removed Successfully"});
   }catch(error){
    console.log(error);
    resp.json({success:false,message:"Error"});
   }
}

// get lecture notes

const getNotes = async (req, resp) => {
  try {
    const lectureNotes = await lectureModel.find({}, { lectureNote: 1, _id: 0 });

    resp.json({ success: true, data: lectureNotes });
  } catch (error) {
    console.log(error);
    resp.json({ success: false, message: "Error" });
  }
};


// search units topic

const searchUnits=async(req,resp)=>{
  const unitName=req.params.unitName;
  try{
    const units=await lectureModel.find({unitName:unitName},{unitName:1, topicName:1, lectureVideo:1, lectureNote:1, _id:0})

    if(!units || units.length===0){
      return resp.json({success:false,message:"No lectures found"});
    }
    resp.json({success:true,data:units});

  }catch(error){
    console.log(error);
    resp.json({success:false,message:"Error"});
  }
}

export {addLecture,listLecture,removeLecture,getNotes,searchUnits};