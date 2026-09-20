

const result = document.querySelector('.result')

const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}




const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]

}
const playTheGame = (human, machine) => {


    console.log('Humano : ' + human + " Maquina : " + machine)

    if (human === machine) {

        // Mostra o resultado quando a rodada termina empatada.
        result.innerHTML = " deu empate !🤝🏾"

    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
          result.innerHTML = "você venceu ! 🥳 "

    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        // Exibe a imagem da IA vencedora com 100 px de largura e altura.
        result.innerHTML = " IA venceu ! 😭 "

    }

}