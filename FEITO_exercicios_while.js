/*
===========================================================
Exercícios Práticos - While
===========================================================
*/

// 1. Use um while para imprimir números de 1 a 10.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Use um while para imprimir números pares até 20.
let num = 0;
while (num <= 20) {
    console.log(num);
    num += 2;
}

// 3. Some números de 1 a 100 usando while.
let count = 1;
let soma = 0;
while (count <= 100) {
    soma += count;
    count++;
}
console.log(soma);

// 4. Crie um while que conte de 10 até 1.
let dec = 10;
while (dec >= 1) {
    console.log(dec);
    dec--;
}

// 5. Crie um while que peça senha até ser igual a "1234".
let senha = "";
while (senha !== "1234") {
}

// 6. Crie um while que calcule a tabuada do 5.
let tabuada = 5;
let j = 1;
while (j <= 10) {
    console.log(tabuada + " x " + j + " = " + (tabuada * j));
    j++;
}

// 7. Crie um while que exiba os caracteres da string "JavaScript".
let str = "JavaScript";
let index = 0;
while (index < str.length) {
    console.log(str[index]);
    index++;
}

// 8. Use while para calcular o fatorial de 5.
let n = 5;
let fatorial = 1;
while (n > 1) {
    fatorial *= n;
    n--;
}
console.log(fatorial);

// 9. Peça para o aluno prever o resultado:
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }


// 10. Crie um while que só termina quando um número aleatório for 7.
let rand = 0;
while (rand !== 7) {
    rand = Math.floor(Math.random() * 10);
    console.log(rand);
}