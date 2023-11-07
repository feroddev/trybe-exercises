const readline = require('readline-sync');

const generateFibonacciSequence = (n) => {
  const arrayFibonacci = [1];
  for (let index = 1; index < n; index++) {
    if(index === 1) {
      const result = arrayFibonacci[index - 1] + 0;
      arrayFibonacci.push(result);
    } else {
      const result = arrayFibonacci[index - 1] + arrayFibonacci[index - 2];
      arrayFibonacci.push(result);
    }
  }
  console.log(arrayFibonacci);
}

function main() {
  const n = readline.questionInt('Digite um numero: ');
  if (n <= 0) {
      throw new Error('Numero inválido');
  }
  console.log(`n: ${n}`);

  generateFibonacciSequence(n);
}

main();
