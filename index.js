const fs = require("fs");
const path = require("path");

// Create the metadata folder if it doesn't exist
const folderPath = path.join(__dirname, "metadata");
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// Generate 111 JSON files with unique names
for (let i = 1; i <= 111; i++) {
  const json = {
    name: `HexBag #${i}`,
    description:
      "Limited free mint collection of Hex Bags, be one of the first to own unique Digital Fashion and get rewards as the project development grows.",
    image: `ipfs://QmWWMSzaFEsKyMfXJCNpGyaUayVbWg3tmg2Ht1Uq8qndKB/HexBag_${i}.jpg`,
    edition: 1,
  };

  const fileName = `${i}.json`;
  const filePath = path.join(folderPath, fileName);
  fs.writeFileSync(filePath, JSON.stringify(json));
}
