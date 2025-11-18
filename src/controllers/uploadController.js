import Document from "../models/Document.js";
import AuditLog from "../models/AuditLog.js";
import { v4 as uuidv4 } from "uuid";

export const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file received" });
    }

    const fileId = uuidv4();

    const doc = await Document.create({
      fileId,
      fileName: req.file.filename,
      filePath: req.file.path,
      uploader: req.body.uploader,
      status: "Draft"
    });

    await AuditLog.create({
      fileId,
      action: "File Uploaded (Draft)",
      user: req.body.uploader
    });

    res.json({
      message: "File uploaded successfully",
      fileId,
      document: doc
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
