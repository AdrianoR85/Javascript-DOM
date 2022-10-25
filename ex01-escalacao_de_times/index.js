const btnAdd = document.querySelector(".addPlayer")
const btnRemove = document.querySelector('.removePlayer')

function addPlayer() {
    const position = document.getElementById("position").value
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value

    const confirmation = confirm(`Escalar ${name} como ${position}`)

    if(confirmation) {
        createElementePlayer(position, name, number)
        clearInputs()
    }
}

function removePlayer() {
    const number = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + number)

    const confirmation = confirm(`Remover o jagador ${playerToRemove.innerText}?`) 

    if(confirmation) {
        document.getElementById("team-list").removeChild(playerToRemove)
        document.getElementById("numberToRemove").value = ""
    }
}

function createElementePlayer(position, name, number) {
    const timeList = document.querySelector('#team-list')
    const playerItem = document.createElement('li')
    playerItem.id = `player-${number}`
    playerItem.innerText = `${position}: ${name} (${number}) `
    timeList.appendChild(playerItem)
}

function clearInputs() {
    document.getElementById("position").value = ""
    document.getElementById("name").value = ""
    document.getElementById("number").value = ""
}

btnAdd.addEventListener('click', addPlayer)
btnRemove.addEventListener('click', removePlayer)