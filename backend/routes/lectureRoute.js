import express from 'express';
import { addLecture, getNotes, listLecture, removeLecture, searchUnits } from '../controllers/lectureController.js';
import multer from "multer";

const lectureRouter = express.Router();

// Multer storage configuration for both videos and notes
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  }
});

// Configure multer to handle both lecture video and lecture notes

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 200 }, 
  fileFilter: (req, file, cb) => {
    const filetypes = /mp4|mkv|pdf/;
    const extname = filetypes.test(file.originalname.split('.').pop());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: Unsupported file type');
  }
});

//post api

lectureRouter.post("/add", upload.fields([
  { name: 'lectureVideo', maxCount: 1 }, 
  { name: 'lectureNote', maxCount: 1 }  
]), addLecture);

//get lecture list api
lectureRouter.get("/list",listLecture);

//delete api
lectureRouter.post("/remove",removeLecture);

//get note api
lectureRouter.get("/lectureNotes", getNotes);

//search units api
lectureRouter.get("/search/:unitName",searchUnits);

export default lectureRouter;
