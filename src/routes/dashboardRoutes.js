import express from "express";
import { getDashboardStatus } from "../controllers/dashboardController.js";

const router = express.Router();
router.get("/", getDashboardStatus);

export default router;
