/*
===========================================================
Exercícios Práticos - Arrays
===========================================================
*/

// 1. Crie um array com 5 elementos e exiba o terceiro.
const arr = [10, 20, 30, 40, 50];
console.log(arr[2]);

// 2. Adicione um elemento ao final do array.
const n = [1, 2, 3];
n.push(4);
console.log(n);

// 3. Remova o primeiro elemento do array.
n.shift();
console.log(n);

// 4. Use map para transformar todos os elementos em strings maiúsculas.
let nomes = ["ana", "bruno", "carlos"];
let nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

// 5. Use filter para criar um novo array apenas com números pares.
let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);

// 6. Use reduce para somar todos os números de um array.
let somaTotal = numeros.reduce((acum, val) => acum + val, 0);
console.log(somaTotal);

// 7. Use find para encontrar o primeiro elemento maior que 10.
let valores = [5, 8, 12, 19, 3];
let primeiroMaiorQue10 = valores.find(v => v > 10);
console.log(primeiroMaiorQue10);

// 8. Ordene um array de números em ordem crescente.
let desordenados = [5, 2, 9, 1, 5, 6];
desordenados.sort((a, b) => a - b);
console.log(desordenados);

// 9. Inverta a ordem dos elementos de um array.
let invertidos = [1, 2, 3, 4, 5];
invertidos.reverse();
console.log(invertidos);

// 10. Faça a troca de valores entre dois índices usando destructuring.
let troca = [100, 200];
[troca[0], troca[1]] = [troca[1], troca[0]];
console.log(troca);