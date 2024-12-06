import { Router } from "express";
import { authRequire } from '../middlewares/validateToken.js'
import { getTask, getTasks, updateTask, deleteTask, createTask } from "../controller/task.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskShema } from "../schemas/task.schema.js";

const router = Router()

router.get('/tasks', authRequire, getTasks)
router.get('/tasks/:id', authRequire, getTask)
router.post('/tasks', authRequire, validateSchema(createTaskShema), createTask)
router.delete('/tasks/:id', authRequire, deleteTask)
router.put('/tasks/:id', authRequire, updateTask)

export default router

