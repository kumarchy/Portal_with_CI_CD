import express from 'express';
import { addMarks, listMarks, removeMarks } from '../controllers/marksController.js';

const marksRouter = express.Router();

// post marks api
marksRouter.post('/add',addMarks);

//get marks list api
marksRouter.get("/list",listMarks);

//delete api
marksRouter.post("/remove",removeMarks);

export default marksRouter;