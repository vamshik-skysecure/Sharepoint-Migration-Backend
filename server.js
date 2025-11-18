import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import documentRoutes from './src/routes/documentRoutes.js';

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use('/api', documentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
