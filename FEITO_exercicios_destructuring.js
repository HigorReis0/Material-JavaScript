/*
===========================================================
Exercícios Práticos - Destructuring
===========================================================
*/

// 1. Usando destructuring, pegue os dois primeiros valores de um array.
const array = [10, 20, 30, 40, 50];
const [first, second] = array;
console.log(first);  // 10
console.log(second); // 20

// 2. Use destructuring para extrair propriedades nome e idade de um objeto.
const person = { nome: 'Ana', idade: 25, cidade: 'São Paulo' };
const { nome, idade } = person;
console.log(nome);  // Ana
console.log(idade); // 25

// 3. Use destructuring para extrair uma propriedade que não existe e defina um valor padrão.
const { profissao = 'Desconhecida' } = person;
console.log(profissao); // Desconhecida

// 4. Use destructuring aninhado para extrair propriedades de um objeto dentro de outro.
const user = {
  id: 1,
  info: {
    name: 'Fulano',
    email: 'Fulano.@gmail.com'
  }
};

const { id, info: { nome2, email } } = user;

console.log(id);
console.log(nome2);
console.log(email);
// 5. Use rest operator para pegar os elementos restantes de um array depois de extrair alguns.
const [primeiro, segundo, ...resto] = array;
console.log(primeiro); // 10
console.log(segundo); // 20
console.log(resto);   // [30, 40, 50]

// 6. Troque os valores de duas variáveis usando destructuring.
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5

// 7. Destructure os parâmetros de uma função que recebe um objeto com nome e idade.
function mostrarInfo({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}

mostrarInfo({ nome: 'Carlos', idade: 30 });

// 8. Use destructuring para extrair chaves e valores de um objeto dentro de uma função.
function exibirPropriedades({ chave1, chave2 }) {
  console.log(`Chave1: ${chave1}, Chave2: ${chave2}`);
}

const obj = { chave1: 'valor1', chave2: 'valor2', chave3: 'valor3' };
exibirPropriedades(obj);
// 9. Extraia propriedades de um objeto e renomeie as variáveis usando destructuring.
const { nome: nomeRenomeado, idade: idadeRenomeada } = person;
console.log(nomeRenomeado);  // Ana
console.log(idadeRenomeada); // 25

// 10. Use destructuring para extrair elementos de um array retornado por uma função.
function retornarArray() {
  return [1, 2, 3, 4, 5];
}

const [um, dois, tres] = retornarArray();
console.log(um);   // 1
console.log(dois); // 2
console.log(tres); // 3