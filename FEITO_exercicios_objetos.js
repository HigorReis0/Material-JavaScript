/*
===========================================================
Exercícios Práticos - Objetos
===========================================================
*/

// 1. Crie um objeto com 3 propriedades diferentes e exiba-o.
const livro = {
  titulo: "O melhor livro do mundo",
  autor: "O melhor autor",
  anoPublicacao: 2000
};
console.log(livro);
// 2. Acesse e exiba uma propriedade usando notação de ponto e colchetes.
console.log(livro.titulo);
console.log(livro['autor']);

// 3. Adicione uma nova propriedade ao objeto depois de criado.
livro.genero = "Ficção Científica";
console.log(livro);

// 4. Remova uma propriedade do objeto.
delete livro.anoPublicacao;
console.log(livro);

// 5. Adicione um método que retorne uma string usando propriedades do objeto.
livro.getDescricao = function() {
  return `O livro "${this.titulo}" foi escrito por ${this.autor}.`;
};
console.log(livro.getDescricao());

// 6. Crie um objeto aninhado (objeto dentro de objeto) e exiba um valor interno.
const desenvolvedor = {
  nome: "Maria Silva",
  contato: {
    email: "maria.silva@email.com",
    telefone: "11987654321"
  }
};
console.log(desenvolvedor.contato.email);

// 7. Itere sobre as propriedades do objeto e exiba cada par nome/valor.
for (const chave in livro) {
  console.log(`${chave}: ${livro[chave]}`);
}

// 8. Clone um objeto usando spread e altere uma propriedade no clone.
const carroOriginal = {
  marca: "Honda",
  modelo: "Civic"
};
const carroClonado = { ...carroOriginal };
carroClonado.modelo = "Fit";

console.log("Original:", carroOriginal);
console.log("Clonado:", carroClonado);

// 9. Compare dois objetos com mesmo conteúdo e explique o resultado da comparação.
const objA = { a: 1, b: 2 };
const objB = { a: 1, b: 2 };

console.log(objA == objB);
console.log(objA === objB);

// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade.
const configuracoes = {
  versao: "1.0",
  ativo: true
};

Object.freeze(configuracoes);

configuracoes.ativo = false; // Esta alteração falhará silenciosamente
configuracoes.tema = "escuro"; // Esta adição também falhará

console.log(configuracoes);