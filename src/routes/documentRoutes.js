import express from 'express';
import { extractMetadata } from '../controllers/documentController.js';

const router = express.Router();

router.post('/documents/:id/extract-metadata', extractMetadata);

export default router;
