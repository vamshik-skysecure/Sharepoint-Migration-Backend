export const redactContent = async (req, res) => {
  try {
    let { text, flagged } = req.body;

    flagged.forEach(item => {
      const regex = new RegExp(item, "gi");
      text = text.replace(regex, "[REDACTED]");
    });

    res.json({ sanitized: text });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
