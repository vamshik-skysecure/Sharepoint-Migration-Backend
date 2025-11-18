import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import uploadRoutes from "./routes/uploadRoutes.js";
import workflowRoutes from "./routes/workflowRoutes.js";
import redactionRoutes from "./routes/redactionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // VERY IMPORTANT


// FIX 2: Needed to serve uploaded files
app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/documents", uploadRoutes);
app.use("/api/documents", workflowRoutes);
app.use("/api/documents", redactionRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;
