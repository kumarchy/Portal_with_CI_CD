import express from 'express';
import multer from "multer";
import { achievementList, addAchievement, removeAchievement } from '../controllers/achievementController.js';

const achievementRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload=multer({storage:storage});

//post achievement api
achievementRouter.post("/add",upload.single("achievementImage"), addAchievement);

//get achievement list api
achievementRouter.get("/list",achievementList);

//remove achievement list
achievementRouter.post("/remove",removeAchievement);

export default achievementRouter;