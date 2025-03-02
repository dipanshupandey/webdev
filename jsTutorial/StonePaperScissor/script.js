let stone=document.querySelector("#stone")
let paper=document.querySelector("#paper")
let scissors=document.querySelector("#scissors")
let desc=document.querySelector("#desc")
let label=document.querySelector(".label")
let userScore=0
let computerScore=0
console.dir(stone)

function game(event){
    let choices=["stone","paper","scissors"]
    let userChoice=event.target.id
    let computerChoice=choices[Math.floor(Math.random()*3)]
    let win=0
    if (userChoice == computerChoice){
        win=2
    }
    else if(userChoice==="stone" && computerChoice==="paper")
    {
        computerScore+=1
    }
    else if(userChoice==="paper" && computerChoice==="scissors")
    {
        computerScore+=1
    }
    else if(userChoice==="scissors" && computerChoice==="stone")
    {
        computerScore+=1
    }
    else 
    {
        userScore+=1
        win=1
    }
    let pscore=document.querySelector("#pscore")
    let cscore=document.querySelector("#cscore")
    pscore.innerText=userScore
    cscore.innerText=computerScore
    if (win==2){
        desc.innerText="Draw! user choosed "+userChoice+" computer choosed "+computerChoice
        desc.style.border="5px solid black"
    }
    else if (win==1){
        desc.innerText="User Won! user choosed "+userChoice+" computer choosed "+computerChoice
        desc.style.border="5px solid green"
    }
    else{
        desc.innerText="Computer Won! user choosed "+userChoice+" computer choosed "+computerChoice
        desc.style.border="5px solid red"
    }
} 
stone.addEventListener("click",game)
paper.addEventListener("click",game)
scissors.addEventListener("click",game)