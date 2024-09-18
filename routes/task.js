import express from 'express';
import { create, getAll, remove, update, getOne }  from '../controllers/task.js'

const router = express.Router();

router.get("/tasks", getAll);
router.get("/task/:id", getOne);
router.post("/task", create);
router.put("/task/:id", update);
router.delete("/task/:id", remove);

export default router;
