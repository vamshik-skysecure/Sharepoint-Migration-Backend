import Document from "../models/Document.js";
import AuditLog from "../models/AuditLog.js";

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { newStatus, user } = req.body;

    const doc = await Document.findOne({ fileId: id });

    if (!doc) return res.status(404).json({ error: "Document not found" });

    doc.status = newStatus;
    await doc.save();

    await AuditLog.create({
      fileId: id,
      action: `Status changed to ${newStatus}`,
      user
    });

    res.json({ message: "Status updated", document: doc });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
