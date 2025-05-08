import express from 'express';
import multer from 'multer';
import { addBooks, bookList, getBook, removeBook } from '../controllers/bookController.js';

const bookRouter=express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload=multer({storage:storage});

bookRouter.post("/add",upload.single("book"),addBooks);

//get book by className
bookRouter.get("/get/:class",getBook)

//get all book list
bookRouter.get("/list",bookList)

//remove book list
bookRouter.post('/remove',removeBook)

export default bookRouter;