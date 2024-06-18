//Definição da variável
let nomeHeroi = prompt ("Super-Herói"); // Entrada do nome do personagem
let xp = prompt ("Qual o XP do seu personage?"); // Exemplo de experiência

// Determinação do nível do herói com base na experiência
let nivel = xp

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
} 

// Exibição da mensagem com o nome do herói e seu nível
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);