function calculoMedia(n1, n2, n3, n4) {
    resultado = (n1 + n2 + n3 + n4) / 4;
    console.log(resultado)
    return resultado
}

function verificacaoMedia () {
    if (resultado < 7) {
        console.log("Estudante não aprovado(a) por média.");
        recuperacaoFinal();
    } else {
        console.log("Estudante aprovado(a) por média!")
    }
}

function recuperacaoFinal () {
    recuperacao = parseFloat(prompt("Insira a nota da recuparação: "));
    if (recuperacao >= 7) {
        console.log("Estudante aprovado(a) pela recuperação.")
    } else {
        console.log("Estudante reprovado(a).")
    }
}

var nota1 = parseFloat(prompt("Insira a primeira nota: "));
var nota2 = parseFloat(prompt("Insira a segunda nota: "));
var nota3 = parseFloat(prompt("Insira a terceira nota: "));
var nota4 = parseFloat(prompt("Insira a quarta nota: "));
var recuperacao
var resultado

calculoMedia(nota1, nota2, nota3, nota4);
verificacaoMedia();