let playerChoice=1;
let computerChoice=1;
let results="";
let cont=0;



function getChoice(choice){
    if(choice==1){
        return "WATER";
    }else if(choice==2){
        return "FIRE";
    }else if(choice==3){
        return "GRASS";
    }
}


function getWinner(playerChoice, computerChoice){
    if(playerChoice==computerChoice){
        return "DRAW";
    }else{
        if(playerChoice=="WATER"&&computerChoice=="FIRE")
            return "PLAYER WINS";
        else if(playerChoice=="FIRE"&&computerChoice=="GRASS")
            return "PLAYER WINS";
        else if(playerChoice=="GRASS"&&computerChoice=="WATER")
            return "PLAYER WINS";
        else
            return "COMPUTER WINS";
    }
}


const waterBtn = document.getElementById('waterBtn');
const fireBtn = document.getElementById("fireBtn");
const grassBtn = document.getElementById("grassBtn");
const resultsBox=document.getElementById("results");
const playerText=document.getElementById("playerResult");
const computerText=document.getElementById("computerResult");
const matchText=document.getElementById("matchResult");
const roundCount=document.getElementById("roundCount");
const playBtn=document.getElementById("play");


function allButtonsWhite(element){
    if(element=="water"){
        fireBtn.style.backgroundColor="white";
        grassBtn.style.backgroundColor="white";
    }else if(element=="fire"){
        grassBtn.style.backgroundColor="white";
        waterBtn.style.backgroundColor="white";   
    }else if(element=="grass"){
        waterBtn.style.backgroundColor="white";
        fireBtn.style.backgroundColor="white";
    }else if(element==""){
        waterBtn.style.backgroundColor="white";
        fireBtn.style.backgroundColor="white";
        grassBtn.style.backgroundColor="white";
    }
}


waterBtn.addEventListener("click", ()=>{
    waterBtn.style.backgroundColor= "rgb(195, 195, 195)";
    allButtonsWhite("water");
    playerChoice=1;
});

fireBtn.addEventListener("click", ()=>{
    fireBtn.style.backgroundColor= "rgb(195, 195, 195)";
    allButtonsWhite("fire");
    playerChoice=2;
});

grassBtn.addEventListener("click", ()=>{
    grassBtn.style.backgroundColor= "rgb(195, 195, 195)";
    allButtonsWhite("grass");
    playerChoice=3;
});

function updateResults(playerResult, computerResult){
    playerText.textContent="Player picked: "+getChoice(playerResult);
    computerText.textContent="Computer picked: "+getChoice(computerResult);
    matchText.textContent=getWinner(playerResult, computerResult);
    roundCount.textContent="ROUND "+cont.toString();
}

function restartResults(){
    playerText.textContent="";
    computerText.textContent="";
    matchText.textContent="";
    computerChoice=0;
    results="";
    allButtonsWhite("");
}


playBtn.addEventListener("click", ()=>{
    cont++;
    restartResults();
    computerChoice=Math.floor(Math.random()*3)+1;
    updateResults(playerChoice, computerChoice);
});





