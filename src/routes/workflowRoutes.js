import express from "express";
import { updateStatus } from "../controllers/workflowController.js";

const router = express.Router();
router.patch("/:id/status", updateStatus);

export default router;
