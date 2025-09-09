/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.
var variavelString = "Beltrano"
console.log(variavelString);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.
alunos = {
    nome: "fulano",
    idade: 16,
    matricula: 10204
}
console.log(alunos.nome)
// 3. Crie um array com 5 elementos e exiba o terceiro elemento.

elementos = ["ar", "terra", "fogo", "agua"]

console.log(elementos[2]);

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.

const funcionarios = {
    nome: "Fulano",
    idade: 30,
}

funcionarios.carteirinha = "1010"
console.log(funcionarios);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.
const propriedadeParaAcessar = 'idade';
console.log(funcionarios[propriedadeParaAcessar]);

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).
function exibirObjeto(obj) {
  for (const chave in obj) {
    console.log(`${chave}: ${obj[chave]}`);
  }
}
exibirObjeto(alunos);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.
const empresa = {
  nome: "Tech Solutions",
  departamento: {
    nome: "Engenharia",
    gerente: {
      nome: "Ana Pereira",
      id: 987
    }
  }
};
console.log(empresa.departamento.gerente.nome);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.
const frutas = ["Maçã", "Banana", "Laranja"];
for (const indice in frutas) {
  console.log(`Índice (nome): ${indice}, Valor (conteúdo): ${frutas[indice]}`);
}

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.
let escopoGlobal = "Estou no escopo global";

function mostrarEscopos() {
  let escopoLocal = "Estou no escopo local";
  console.log(escopoGlobal);
  console.log(escopoLocal);
}

mostrarEscopos();
console.log(escopoGlobal);
// console.log(escopoLocal); // Isso causaria um erro (ReferenceError), pois escopoLocal não existe aqui.

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.
const produto = {
  nome: "Notebook",
  preco: 5000
};

console.log("Antes:", produto);
produto.preco = 4500;
console.log("Depois:", produto);