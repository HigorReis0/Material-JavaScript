/*
===========================================================
Exercícios Práticos - Operadores de Comparação
===========================================================
*/

// 1. Teste 5 == "5" e exiba o resultado.
console.log(5 == "5"); // true

// 2. Teste 5 === "5" e exiba o resultado.
console.log(5 === "5"); // false

// 3. Teste 5 != "5" e 5 !== "5". Explique a diferença.
console.log(5 != "5"); // Compara valor
console.log(5 !== "5");  // Compara valor e tipo

// 4. Teste 10 > 5.
console.log(10 > 5) // true

// 5. Teste 10 < 5.
console.log(10 < 5) // false

// 6. Teste 10 >= 10.
console.log(10 >= 5) // true

// 7. Teste 5 <= 7.
console.log(5 <= 7) // true

// 8. Crie uma variável `idade = 20`. Verifique se é maior ou igual a 18.
const idade = 20
console.log(idade >= 18); // true

// 9. Crie uma variável `nota = 6`. Verifique se `nota >= 7`.
const nota = 6 
console.log(nota >= 7); // false

// 10. Peça para o aluno prever o resultado de:
let a = 10, b = "10";
console.log(a == b);
console.log(a === b);
// Acertei, true no primeiro e false no segundo
