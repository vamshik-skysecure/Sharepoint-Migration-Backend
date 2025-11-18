import Document from "../models/Document.js";

export const getDashboardStatus = async (req, res) => {
  const docs = await Document.find({});
  res.json(docs);
};
