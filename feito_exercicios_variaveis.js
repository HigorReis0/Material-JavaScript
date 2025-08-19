/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "higor"
console.log(typeof nome);
console.log(nome);

// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.


let numero = 1
numero = 2 
console.log(typeof numero);


// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.

const pessoa = []
pessoa.push("Fulano")
pessoa.push("ADS")
pessoa.push("115")
console.log(typeof pessoa);

// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.

if (true) {
    var nomeCarro = "Celta"
}

console.log("Nome do modelo do carro" + nomeCarro);
console.log(typeof nomeCarro);  

// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).

if (true) {
    //let nomePais = "Brasil" // O erro está aqui, pois o valor de nomePais ficará dentro do bloco.
}

// console.log("Nome do pais:" + nomePais);
// console.log("Essa variavel é do tipo: " + typeof nomePais);  

// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.
var primeiroTeste = "Olá"
var primeiroTeste = "Olá mundo"
//let segundoTeste = "Olá2"
//let segundoTeste = "Olá mundo2"

console.log("Este é o teste com o var: " + typeof primeiroTeste);
console.log("Este é o teste com o let: " + typeof segundoTeste);
console.log("No caso do segundo teste, sinaliza que ele já foi declarado.")

// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.

const aluno = {
    nome: "Fulano", // Nome do aluno
    curso: "ADS" // Curso do 
}
aluno.curso = "enfermagem";
console.log(typeof aluno) // 

// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let variavelPraDepois
variavelPraDepois = "Testando"
console.log(variavelPraDepois);
console.log(typeof variavelPraDepois);
// A variavel foi criada, porém o valor somente foi declarado depois.

// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
console.log(testeHosting);
let testeHosting = "Testando o hosting"
// Me é sinalizado que não é possível acessar uma variavel antes de inicializa-la.

// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
function nome() {
    var nomeDoProfessor = "Rodrigo"
    return nomeDoProfessor
}
const professor = nome();
console.log(professor)