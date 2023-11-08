const fs = require("fs").promises;

async function addNewSimpson() {
  const fileContent = await fs.readFile("./simpsonsFamily.json", 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

function main(){
  addNewSimpson();
}

main();