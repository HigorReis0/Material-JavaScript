/*
===========================================================
Exercícios Práticos - Operadores Lógicos
===========================================================
*/

// 1. Crie p = true e q = false. Exiba p && q.
const p = true
const q = false

console.log(p & q); // 0

// 2. Exiba p || q.
console.log(p || q); // true

// 3. Exiba !p e !q.
console.log(!p); // false

// 4. Verifique se idade > 18 E temCarteira == true.
temCarteira = true
const idade = 18
console.log(idade > 18, temCarteira == true); // false true

// 5. Use || para definir um valor padrão se uma variável for undefined.
let sim;
const decisao = sim || "Não"
console.log(decisao)

// 6. Teste (5 > 3 && 10 < 20).
console.log(5 > 3 && 10 < 20); // true

// 7. Teste (false || (true && true)).
console.log(false || (true && true)); // true

// 8. Crie um if que só roda se usuario == "admin" E senha == "1234".
const usuario = "admin"
const senha = "1234"

if (usuario == "admin" & senha == "1234")
    console.log("Usuario liberado!")

// 9. Crie uma expressão com !(nota >= 7).
const nota = 6
console.log(!(nota >= 7)); // true, pois nota é menor que 7 e o ! inverte o valor

// 10. Peça para o aluno prever o resultado de:
let x = false, y = true, z = false;
console.log(x || y && !z);
// Acertei, true
