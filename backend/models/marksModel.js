import mongoose from 'mongoose';

const marksSchema=new mongoose.Schema({
  class: { type: String, required: true },
  roll_number: { type: Number, required: true },
  subject: { type: String, required: true },
  full_marks: { type: Number, required: true },
  pass_marks: { type: Number, required: true },
  obtained_marks: { type: Number, required: true },
  remarks: { type: String, required: true }
})

const marksModel=mongoose.models.marks || mongoose.model("marks",marksSchema);

export default marksModel;