/*
===========================================================
Exercícios Práticos - Do...While
===========================================================
*/

// 1. Use do...while para imprimir números de 1 a 5.
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// 2. Use do...while para pedir senha até ser "1234".


// 3. Use do...while para imprimir pares até 20.
let num = 0;
do {
    console.log(num);
    num += 2;
} while (num <= 20);

// 4. Use do...while para exibir uma mensagem pelo menos uma vez, mesmo que a condição seja falsa.


// 5. Crie um do...while que conte de 10 até 1.
let dec = 10;
do {
    console.log(dec);
    dec--;
} while (dec >= 1);

// 6. Crie um do...while que exiba os caracteres de uma string.
let str = "JavaScript";
let index = 0;
do {
    console.log(str[index]);
    index++;
} while (index < str.length);

// 7. Use do...while para calcular soma de 1 a 100.
let count = 1;
let soma = 0;
do {
    soma += count;
    count++;
} while (count <= 100);
console.log(soma);

// 8. Use do...while para gerar números aleatórios até sair 0.
let rand;
do {
    rand = Math.floor(Math.random() * 10); // Números entre 0 e 9
    console.log(rand);
} while (rand !== 0);

// 9. Peça para o aluno prever o resultado:
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);


// 10. Crie um do...while que calcule o fatorial de 6.
let n = 6;
let fatorial = 1;
do {
    fatorial *= n;
    n--;
} while (n > 1);
console.log(fatorial);