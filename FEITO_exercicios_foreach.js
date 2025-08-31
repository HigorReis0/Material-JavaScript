/*
===========================================================
Exercícios Práticos - forEach
===========================================================
*/

// 1. Crie um array com 5 nomes e exiba cada nome no console usando forEach.
const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
nomes.forEach(nome => console.log(nome));

// 2. Crie um array com números e exiba o dobro de cada um usando forEach.
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(num => console.log(num * 2));

// 3. Crie um array com frutas e exiba a posição (índice) de cada fruta usando forEach.
const frutas = ["maçã", "banana", "laranja", "uva", "pera"];
frutas.forEach((fruta, index) => console.log(index + ": " + fruta));

// 4. Some todos os números de um array usando forEach e exiba o resultado.


// 5. Conte quantas palavras em um array possuem mais de 5 letras usando forEach.
const palavras = ["casa", "elefante", "computador", "livro", "programação"];
let count = 0;
palavras.forEach(palavra => {
    if (palavra.length > 5) {
        count++;
    }
});
console.log("Palavras com mais de 5 letras:", count);

// 6. Crie um array de objetos (nome, idade) e exiba apenas os nomes usando forEach.
const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carlos", idade: 22 }
];
pessoas.forEach(pessoa => console.log(pessoa.nome));

// 7. Crie um array de preços e exiba apenas os que forem maiores que 50 usando forEach.
const precos = [30, 60, 45, 80, 20];
precos.forEach(preco => {
    if (preco > 50) {
        console.log(preco);
    }
});

// 8. Crie um array de strings e exiba todas em letras maiúsculas usando forEach.
const strings = ["javascript", "python", "java", "c#"];
strings.forEach(str => console.log(str.toUpperCase()));

// 9. Crie um array de números e exiba apenas os pares usando forEach.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach(n => {
    if (n % 2 === 0) {
        console.log(n);
    }
});

// 10. Crie um array de notas e exiba “Aprovado” para notas >= 7 e “Reprovado” para as demais usando forEach.
const notas = [5, 8, 6, 9, 4];
notas.forEach(nota => {
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
});