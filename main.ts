let idade: number = 10;

if (idade >= 18) {
  console.log("Voce é maior de idade!");
}

if (idade < 18) {
  console.log("Voce é menor de idade!");
}

console.log("terminou");

if (idade >= 18) {
  console.log("Voce é maior de idade!");
} else {
  console.log("Voce é menor de idade!");
}

console.log("terminou");

if (idade >= 18) {
  console.log("Voce é maior de idade!");
} else {
  if (idade >= 16) {
    console.log("Voce é menor de idade, mas ja pode votar!");
  } else {
    console.log("Voce é menor de idade!");
  }
}

console.log("terminou");

if (idade >= 18) {
  console.log("Voce é maior de idade!");
} else if (idade >= 16) {
  console.log("Voce é menor de idade, mas ja pode votar!");
} else {
  console.log("Voce é menor de idade!");
}

console.log("terminou");
