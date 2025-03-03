let score=0
let sec=60
let rn=0
let clicked=0
function setBubbles() {
  let clutter = "";

  for (let i = 1; i <= 133; i++) {
    let temp = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"> ${temp}</div>`;
  }
  pannel2 = document.querySelector("#pannel2");
  pannel2.innerHTML = clutter;
}

function updateHit(){
    rn=Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=rn
}

function updateScore(){
score+=10
document.querySelector("#scoreVal").textContent=score
}


function updateTimer(){
   
    let coundown=setInterval(()=>{
        
        if(sec>0){
            sec--;
        document.querySelector("#timer").textContent=sec;
        }
        else{
            clearInterval(coundown);
            document.querySelector("#pannel2").innerHTML="<h1>Game Over!</h1>"
        }
        
    },1000);
    
}

document.querySelector("#pannel2").addEventListener("click",(event)=>{
    clicked=Number(event.target.textContent);
    if (clicked==rn){
        updateScore();
        updateHit();
        setBubbles();
        
    }

})

function startGame(){
    setBubbles();
    updateHit();
    
    updateTimer();
}

startGame()