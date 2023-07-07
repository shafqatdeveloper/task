import express from 'express'
import { createTask, getTasks } from '../Controllers/taskController.js';
const router = express.Router()


router.post("/tasks/create",createTask)
router.get("/tasks",getTasks)




export default router;