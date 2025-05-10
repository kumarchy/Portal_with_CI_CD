import mongoose from "mongoose";

export const connectDB=async()=>{
  // await mongoose.connect('mongodb+srv://BalmikiInternational:Balmiki00@cluster0.fg0vc.mongodb.net/Balmiki_Portal').then(()=>
  //   console.log("DB Connected")
  // );

  await mongoose.connect(process.env.MONGODB_URI).then(()=>
    console.log("DB Connected")
  );
}
