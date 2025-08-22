/*
===========================================================
Exercícios Práticos - If/Else
===========================================================
*/

// 1. Crie uma variável idade. Se idade >= 18 exiba "Maior de idade", senão "Menor de idade".
const idade = 20;
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
// 2. Crie uma variável hora. Se hora < 12 → "Bom dia", senão → "Boa tarde".
const hora = 13;
    if (hora < 12) {
        console.log("Bom dia");
    } else {
        console.log("Boa tarde");
    }   

// 3. Crie uma variável nota. Se >= 7 → "Aprovado", senão → "Reprovado".
const nota = 6;
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }   

// 4. Crie uma variável temperatura. Se >= 30 → "Quente", se >= 20 → "Agradável", senão → "Frio".
const temperatura = 25;
    if (temperatura >= 30) {
        console.log("Quente");
    } else if (temperatura >= 20) {
        console.log("Agradável");
    } else {
        console.log("Frio");
    }

// 5. Verifique se um número é par ou ímpar.
const numero = 4;
    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }   

// 6. Crie duas variáveis usuario e senha. Verifique se usuario == "admin" e senha == "1234".
const usuario = "admin";
const senha = "1234";
    if (usuario === "admin" && senha === "1234") {
        console.log("Acesso permitido");
    } else {
        console.log("Acesso negado");
    }

// 7. Crie uma condição que só exiba mensagem se uma variável ativo == true.
const ativo = true;
    if (ativo) {
        console.log("Usuário ativo");
    } else {
        console.log("Usuário inativo");
    }

// 8. Crie um programa que verifique se ano é bissexto (divisível por 4 e não por 100, ou divisível por 400).
const ano = 2024;
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log("Ano bissexto");
    } else {
        console.log("Ano não é bissexto");
    }   

// 9. Peça para o aluno prever o resultado:
// let x = 5;
// if (x > 10) { console.log("Maior que 10"); }
// else if (x > 3) { console.log("Maior que 3"); }
// else { console.log("Outro caso"); }
// Resposta: "Maior que 3"

// 10. Crie um programa que receba 3 notas e calcule a média.
// Se média >= 7 → "Aprovado"
// Se média >= 5 → "Recuperação"
// Senão → "Reprovado".
const nota1 = 5
const nota2 = 7
const nota3 = 9

function cacularMedia(x,y,z) {
    var media = (x + y + z) / 3
    if (media >= 7) {
        return `Sua média é ${media}. Parabens! Você foi aprovado`
    }
    else if (media >= 5) {
        return `Sua média é ${media}. Você está de recuperação, ainda há chances!`
    }
    else {
        return `Sua média é ${media}. Infelizmente você foi reprovado.`
    }
}

console.log(cacularMedia(nota1,nota2,nota3));