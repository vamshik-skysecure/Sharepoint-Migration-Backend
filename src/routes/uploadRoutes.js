import express from "express";
import upload from "../middleware/multer.js";
import { uploadDocument } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadDocument);

export default router;
