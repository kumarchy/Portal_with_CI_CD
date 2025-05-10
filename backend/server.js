import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import lectureRouter from "./routes/lectureRoute.js";
import marksRouter from "./routes/marksRoute.js";
import achievementRouter from "./routes/achievementRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import bookRouter from "./routes/bookRouter.js";

//app config
const app=express();
const port=4000 || process.env.PORT;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/lecture",lectureRouter);
app.use("/lectures",express.static('uploads'));
app.use("/api/marks",marksRouter);
app.use("/api/achievement",achievementRouter);
app.use("/api/book",bookRouter);
app.use("/api/user",userRouter);

app.get("/",(req,resp)=>{
  resp.send("API Working");
})

app.listen(port,()=>{
  console.log(`Server started on http://localhost:${port}`)
});


