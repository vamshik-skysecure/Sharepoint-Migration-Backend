import metadataLookup from "../utils/metadata.json" with { type: "json" };

export const extractMetadataFromText = (textContent) => {
  const suggestions = {};

  metadataLookup.forEach((row) => {
    for (const key in row) {
      const value = row[key];
      if (value && textContent.toLowerCase().includes(value.toLowerCase())) {
        suggestions[key] = value;
      }
    }
  });

  return suggestions;
};
