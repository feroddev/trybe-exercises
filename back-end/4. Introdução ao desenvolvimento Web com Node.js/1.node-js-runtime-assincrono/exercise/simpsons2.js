const fs = require("fs").promises;
const readline = require('readline-sync');


async function getSimpsonById(id) {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(fileContent);
  const perso = simpsons.find(simpsons => simpsons.id === id);

  if (!perso) {
    throw new Error('id não encontrado')
  }
  return `${perso.id} - ${perso.name}`;
}

async function main() {
  const id = readline.question('Id: ');
  const response = await getSimpsonById(id);
  console.log(response);
}

main()
