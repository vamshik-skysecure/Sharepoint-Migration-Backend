import Document from "../models/Document.js";
import { extractMetadataFromText } from "../services/metadataService.js";

// Mock content reading from file
const mockFileContent = `
  This is a Style Guide for Client 1 in the UK region
  The topic is about Noninfectious Uveitis
`;

export const extractMetadata = async (req, res) => {
  try {
    const docId = req.params.id;
    const doc = await Document.findById(docId);

    if (!doc) return res.status(404).json({ error: "Document not found" });

    // TODO: Extract file content from fileUrl
    const extractedTags = extractMetadataFromText(mockFileContent);

    doc.metadataSuggested = extractedTags;
    await doc.save();

    res.json({ success: true, metadata: extractedTags });
  } catch (error) {
    console.error("Extraction Error:", error);
    res.status(500).send("Server Error");
  }
};
