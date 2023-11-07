function handlePromise(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof(num1) !== 'number' | typeof(num2) !== 'number' | typeof(num3) !== 'number') {
      return reject(new Error('Informe apenas números'));
    }

    const result = (num1 + num2) * num3;

    if (result < 50) {
      throw new Error('Valor muito baixo') // maneira diferente de lançar o reject
    } 

    resolve(result);
  });
}

async function main() {
  try {
    const result = await handlePromise(10, 10, 10);
    console.log(result);
  } catch(error) {
    console.log(error.message);
  }
}

main();
