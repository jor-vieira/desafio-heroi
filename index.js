let nome = "Dalas";
let num = 7340;

let nivel;

if (num < 1000) {
    nivel = "Ferro";
} else if (num >= 1001 && num <= 2000) {
    nivel = "Bronze";
} else if (num >= 2001 && num <= 5000) {
    nivel = "Prata";
} else if (num >= 5001 && num <= 7000) {
    nivel = "Ouro";
} else if (num >= 7001 && num <= 8000) {
    nivel = "Platina";
} else if (num >= 8001 && num <= 9000) {
    nivel = "Ascendente";
} else if (num >= 9001 && num <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);