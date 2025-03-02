let stone=document.querySelector("#stone")
let paper=document.querySelector("#paper")
let scissors=document.querySelector("#scissors")
let userScore=0
let computerScore=0
console.dir(stone)

function game(event){
    alert(event.target.id)
} 
stone.addEventListener("click",game)
paper.addEventListener("click",game)
scissors.addEventListener("click",game)