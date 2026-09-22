
// Seleciona o elemento HTML onde a mensagem do resultado será mostrada.
const result = document.querySelector('.result')

// Seleciona os elementos HTML que mostram a pontuação do jogador e da máquina.
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

// Guarda a pontuação atual de cada lado.
let humanScoreNumber = 0
let machineScoreNumber = 0

// Quando o usuário clica em uma opção, essa função recebe a escolha dele
// e chama a lógica do jogo com a escolha da máquina.
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

// Escolhe uma opção aleatória para a IA: pedra, papel ou tesoura.
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

// Compara a escolha humana com a da máquina para decidir o resultado.
const playTheGame = (human, machine) => {
    // Mostra no console para facilitar testes e entender o que aconteceu.
    console.log('Humano : ' + human + ' Maquina : ' + machine)

    // Se as duas escolhas forem iguais, é empate.
    if (human === machine) {
        result.innerHTML = 'deu empate !🤝🏾'

        // Regras de vitória para o jogador:
        // papel vence pedra, pedra vence tesoura, tesoura vence papel.
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'você venceu ! 🥳 '

        // Se não for empate e nem vitória do jogador, então a máquina venceu.
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'IA venceu ! 😭 '
    }
}