let userScore=0;
let compScore=0;
let drawScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");
const draw_score=document.querySelector("#draw-score");
const button=document.querySelector("#btn");


button.addEventListener("click",()=>{
    userScore=0
    compScore=0;
    drawScore=0;
    user_score.innerText=userScore;
    comp_score.innerText=compScore;
    draw_score.innerText=drawScore;
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="#081b31";
});
const genComputerChoice = () =>{
    let options=["rock","paper","scissors"];
    const randIndex=Math.floor(Math.random()*3);//Math.floor() function will remove the float value
    return options[randIndex];
}

const drawGame= () => {
    msg.innerText="Game was Draw. Play again!";
    msg.style.backgroundColor="#081b31";
    drawScore++;
    draw_score.innerText=drawScore;
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        user_score.innerText=userScore;
    }
    else{
        msg.innerText=`You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        comp_score.innerText=compScore;
    }
}

const playGame = (userChoice)=>{
    const compChoice=genComputerChoice();
    if(userChoice===compChoice){
        // draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // computer choice may be paper or scisser
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            // computer choice may be rock or scisser
            userWin =  compChoice==="scissors" ? false : true;
        }
        else{
            // // computer choice may be rock or paper
            userWin = compChoice==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});