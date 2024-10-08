let quantidadeDeVitoria = parseInt(prompt("Digite a quantidade de vitórias:"));
let quantidadeDeDerrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

let saldoTotal = calculo(quantidadeDeVitoria, quantidadeDeDerrotas);

function calculo(quantidadeDeVitoria, quantidadeDeDerrotas) {
   
    let saldoTotal = (quantidadeDeVitoria - quantidadeDeDerrotas);
    let nivel;

  
    if (quantidadeDeVitoria < 10) {
        nivel = "Ferro";
    } else if (quantidadeDeVitoria >= 11 && quantidadeDeVitoria <= 20) {
        nivel = "Bronze";
    } else if (quantidadeDeVitoria >= 21 && quantidadeDeVitoria <= 50) {
        nivel = "Prata";
    } else if (quantidadeDeVitoria >= 51 && quantidadeDeVitoria <= 80) {
        nivel = "Ouro";
    } else if (quantidadeDeVitoria >= 81 && quantidadeDeVitoria <= 90) {
        nivel = "Diamante";
    } else if (quantidadeDeVitoria >= 91 && quantidadeDeVitoria <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log("O Herói tem um saldo de " + saldoTotal + " e está no nível " + nivel);
}

