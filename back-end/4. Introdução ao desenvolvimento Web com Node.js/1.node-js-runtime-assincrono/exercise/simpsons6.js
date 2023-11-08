const fs = require('fs').promises;

async function updateFamily() {
  const fileContent = await fs.readFile("./simpsonsFamily.json", "utf-8");
  const simpsonsFamily = JSON.parse(fileContent);
  const newSimpsonsFamily = simpsonsFamily.map((simpson) => simpson.id === '8' ? {...simpson, name: 'Maggie Simpson' } : simpson );
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(newSimpsonsFamily));
}

function main() {
  updateFamily();
}

main();