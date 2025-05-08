import marksModel from "../models/marksModel.js";

const addMarks=async (req,resp)=>{
  const marks=new marksModel({
    class: req.body.class,
    roll_number: req.body.roll_number,
    subject: req.body.subject,
    full_marks: req.body.full_marks,
    pass_marks: req.body.pass_marks,
    obtained_marks: req.body.obtained_marks, 
    remarks: req.body.remarks,
  });
  console.log(req.body); // Check if all fields are present
  try {
    await marks.save(); 
    resp.json({ success: true, message: "Marks Added Successfully" });
  } catch (error) {
    console.error("Error adding marks:", error);
    resp.json({ success: false, message: "Error" });
  }
}

// all uploaded maks List
const listMarks=async(req,resp)=>{
  try{
    const marks=await marksModel.find({});
    resp.json({success:true,data:marks})
  }catch(error){
    resp.json({success:false,message:"Error"})
  }
}

// remove marks 

const removeMarks= async(req,resp)=>{
  try{
    await marksModel.findByIdAndDelete(req.body.id);
    resp.json({success:true,message:"Marks Removed successfully"});
  }catch(error){
   console.log(error);
   resp.json({success:false,message:"Error"});
  }
}

export {addMarks,listMarks,removeMarks};