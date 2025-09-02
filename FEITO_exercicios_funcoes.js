/*
===========================================================
Exercícios Práticos - Funções
===========================================================
*/

// 1. Crie uma função tradicional que receba dois números e retorne a soma.
function soma(a, b) {
    return a + b;
}
console.log(soma(3, 5)); // Retorna 8

// 2. Crie uma função de seta (arrow function) que receba uma string e retorne ela em maiúsculas.
const maiusculas = str => str.toUpperCase();
console.log(maiusculas("Fala fio")); // Retorna "FALA FIO"

// 3. Crie uma função que recebe um parâmetro opcional com valor padrão e retorne uma saudação.
function saudacao(nome = "Pessoa") {
    return `Olá, ${nome}!`;
}
console.log(saudacao()); // Retorna "Olá, Pessoa!"
console.log(saudacao("Ana")); // Retorna "Olá, Ana!"
// 4. Crie uma função que receba um número indefinido de argumentos e retorne a média deles.
function media(...numeros) {
    const total = numeros.reduce((acc, val) => acc + val, 0);
    return total / numeros.length;
}
console.log(media(10, 20, 30)); // Retorna 20
console.log(media(5, 15)); // Retorna 10

// 5. Crie uma função que retorna outra função que adiciona um número fixo.
function adicionaFixo(fixo) {
    return function(num) {
        return fixo + num;
    };
}
const adiciona5 = adicionaFixo(5);
console.log(adiciona5(10)); // Retorna 15
console.log(adiciona5(20)); // Retorna 25

// 6. Escreva uma IIFE que imprima "Função autoexecutada".
(function() {
    console.log("Função autoexecutada");
})();

// 7. Crie uma função que usa `this` e explique a diferença entre função tradicional e arrow function no contexto do `this`.
function Pessoa(nome) {
    this.nome = nome;
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`);
    };
    this.falarArrow = () => {
        console.log(`Meu nome é ${this.nome}`);
    };
}
const p = new Pessoa("Carlos");
p.falar(); // "Meu nome é Carlos"
p.falarArrow(); // "Meu nome é Carlos"

// 8. Crie uma função que recebe um objeto e imprime seus valores usando destructuring.
function imprimeValores({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}
const pessoa = { nome: "Maria", idade: 28 };
imprimeValores(pessoa); // "Nome: Maria, Idade: 28" 

// 9. Crie uma função que troca os valores de duas variáveis usando destructuring.
function trocaValores(a, b) {
    [a, b] = [b, a];
    return [a, b];
}
let x = 1, y = 2;
[x, y] = trocaValores(x, y);
console.log(x, y); // Retorna 2 1

// 10. Crie uma função recursiva que calcula o fatorial de um número.
function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // Retorna 120
console.log(fatorial(0)); // Retorna 1  