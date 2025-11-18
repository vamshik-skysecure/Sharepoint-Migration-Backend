import express from "express";
import { redactContent } from "../controllers/redactionController.js";

const router = express.Router();
router.post("/:id/redact", redactContent);

export default router;
