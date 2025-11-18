import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
  fileId: String,
  action: String,
  timestamp: { type: Date, default: Date.now },
  user: String
});

export default mongoose.model("AuditLog", auditSchema);
