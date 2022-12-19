//possibilites de victoires

const victory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let count = 0

const displayTurn = () => {
    //premier player
    const player = 0
    //deuxieme player
    const player1 = 1
    //Création de croix
    let cross = player
    cross.innerText = "X"
    //création de rond
    let circle = player1
    circle.innerText = "O"

}

//Intéragir pour que chaque joeur joue tour par tour
const ticTurn = () => {
    //Les case vides servent a jouer
}


document.addEventListener("DOMContentLoaded", () => {
    btn.addEventListener('click', ()=>{
        const btnContentClicked = btn.cross
        btn=document.querySelectorAll("button")
        
    })
})
