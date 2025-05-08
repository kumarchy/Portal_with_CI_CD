import mongoose from 'mongoose';

const achievementSchema=new mongoose.Schema({
  student_name:{type:String,required:true},
  roll_number:{type:Number,required:true},
  class:{type:String,required:true},
  achievementImage:{type:String,required:true}
})

const achievementModel=mongoose.models.achievement || mongoose.model("achievement",achievementSchema);

export default achievementModel;