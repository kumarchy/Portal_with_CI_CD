import achievementModel from "../models/achievementModel.js";
import fs from 'fs';

// add achievements

const addAchievement=async(req,resp)=>{
  const achievementImage_filename = `${req.file.filename}`; 

  const achievement=new achievementModel({
    student_name:req.body.student_name,
    roll_number:req.body.roll_number,
    class:req.body.class,
    achievementImage:achievementImage_filename,
  })

  try {
    await achievement.save();
    resp.json({ success: true, message: "Achievement Added Successfully" });
  } catch (error) {
    resp.json({ success: false, message: "Error" });
  }
}


//get achievement list

const achievementList = async (req,resp)=>{
  try{
    const achievement=await achievementModel.find({});
    resp.json({success:true,data:achievement});
  }catch(error){
    resp.json({success:false,message:"Error"});
  }
}

//remove achievement list

const removeAchievement = async (req,resp) =>{
  try{
   const achievement=await achievementModel.findById(req.body.id);
   fs.unlink(`uploads/${achievement.achievementImage}`,()=>{});
   await achievementModel.findByIdAndDelete(req.body.id);
   resp.json({success:true, message:"Achievement Removed Successfully"});
  }catch(error){
   resp.json({success:false, message:"Error"});
  }
}

export {addAchievement, achievementList, removeAchievement};
