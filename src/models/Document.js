import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  fileId: { type: String, required: true },
  fileName: String,
  filePath: String,
  uploader: String,
  status: { type: String, default: "Draft" },
  metadata: Object,
  flaggedItems: Array,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Document", documentSchema);
