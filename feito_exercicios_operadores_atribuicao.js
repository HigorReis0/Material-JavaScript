/*
===========================================================
Exercícios Práticos - Operadores de Atribuição
===========================================================
*/

// 1. Crie uma variável `n = 10`. Aplique `n += 5` e exiba.
var n = 10
var c = n
n += 5 
console.log(n) // 15

// 2. Continue com o mesmo `n`. Aplique `n -= 3` e exiba.
n -= 3
console.log(n); // 12 pois ele ainda recebe os efeitos dos códigos anteriores

// 3. Continue com o mesmo `n`. Aplique `n *= 2` e exiba.
n *= 2
console.log(n); // 24 pois ele ainda recebe os efeitos dos códigos anteriores

// 4. Continue com o mesmo `n`. Aplique `n /= 4` e exiba.
n /= 4
console.log(n); // 6 pois ele ainda recebe os efeitos dos códigos anteriores

// 5. Continue com o mesmo `n`. Aplique `n %= 3` e exiba.
n %= 3
console.log(n); // 0 

// 6. Continue com o mesmo `n`. Aplique `n **= 2` e exiba.
n **= 2
console.log(n); // 0 pois ele ainda recebe os efeitos dos códigos anteriores

// 7. Mostre que `n = n + 1` é equivalente a `n += 1`.
var primeiraForma = n + 1 
c += 1
console.log(n);
console.log(b);
// 8. Crie `a = 5` e `b = 2`. Atualize `a` usando `a *= b`. Exiba o resultado.
var a = 5
var b = 2
a *= b
console.log(a);
// 9. Crie uma variável `saldo = 1000`. Desconte 15% usando operador de atribuição.
var saldo = 1000
var desconto = 0.15
console.log(`Seu saldo é ${saldo} * ${desconto}`);

// 10. Peça para o aluno prever o resultado antes de rodar:
// let x = 2;
// x += 3;
// x *= 2;
// x -= 4;
// console.log(6);
// Acertei