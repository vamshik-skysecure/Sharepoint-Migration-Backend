import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
  fileUrl: String,
  status: { type: String, default: "Draft" },
  metadataSuggested: Object, // Holds extracted metadata suggestions
  metadataFinal: Object,
  flaggedSections: Array,
  submitterResponse: Object,
  kmReview: Object,
  auditTrail: Array,
}, { timestamps: true });

const Document = mongoose.model("Document", DocumentSchema);
export default Document;
