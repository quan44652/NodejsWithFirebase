import express from "express";
import { create, getAll, remove, update, getOne } from "../controllers/task.js";

const router = express.Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Lấy tất cả các task
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       age:
 *                         type: number
 *                       gender:
 *                         type: string
 *                       class:
 *                         type: string
 */
router.get("/tasks", getAll);

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Lấy một task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy
 */
router.get("/task/:id", getOne);

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Tạo một task mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               gender:
 *                 type: string
 *               class:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tạo thành công
 */
router.post("/task", create);

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Cập nhật một task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               gender:
 *                 type: string
 *               class:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy
 */
router.put("/task/:id", update);

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Xóa một task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       404:
 *         description: Không tìm thấy
 */
router.delete("/task/:id", remove);

export default router;
