// first decide what the human will choose 
//then choose the computers answer 
//compare the two using if cases and decide the winner 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerchoice(){
    let a = getRandomInt(3);
    if (a == 0){
        return "ROCK"
    }
    else if(a == 1){
        return "PAPER"
    }
    else if(a == 2) {
        return "SCISSORS"
    }
}
function humanchoice(){
let sign = prompt("choose between rock, paper or scissors! -");
return sign;
}

function returnwinner(sapienchoice,compchoice){
    if (sapienchoice == "rock"){
        if (compchoice == "ROCK"){
            return "DRAW! GO NEXT!"
        }
        else if (compchoice == "PAPER"){
            return "YOU LOST!"
        }
        else if (compchoice == "SCISSORS"){
            return "YOU WON!"
        }
    }

    else if (sapienchoice == "paper"){
        if (compchoice == "ROCK"){
            return "YOU WON!"
        }
        else if (compchoice == "PAPER"){
            return "DRAW! GO NEXT!"
        }
        else if (compchoice == "SCISSORS"){
            return "YOU LOST!"
        }
    }
    else if (sapienchoice == "scissors"){
        if (compchoice == "ROCK"){
            return "YOU LOST!"
        }
        else if (compchoice == "PAPER"){
            return "YOU WON!"
        }
        else if (compchoice == "SCISSORS"){
            return "DRAW! GO NEXT!"
        }
    }
}

function playGame(){
    let humanscore = 0;
    let computerscore = 0;
    for (let i = 0 ;i<5;i++ ){
    let winner = returnwinner(humanchoice(),computerchoice());

    if (winner == "YOU WON!"){humanscore++;}
    else if(winner == "YOU LOST!"){computerscore++;}
    
    console.log()
    console.log(winner);  
    }
    console.log("YOUR SCORE:",humanscore);
    console.log("THE AI'S SCORE:",computerscore);
    let ties = 5 - humanscore - computerscore;
    if(humanscore>computerscore){console.log("YOU WON AGAINST THE NASTY AI! "+`\n TIES: ${ties}`)}
    else{console.log("THE AI BEAT YOU!"+`\n TIES: ${ties}`)}
}  
document.getElementById("playGame").addEventListener("click",playGame);