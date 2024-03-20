let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
};



boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
    console.log("box was clicked");
    if (turnO) {
        box.innerText = "O";
        turnO = false ;
    } else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
    })
});
const disabledboxes = () => {
    for (let box of boxes) {
    box.disabled = true;
    }
};
const enabledboxes = () => {
    for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
    }
};
const showWinner = (winner) => {
    msg.innerText = ` congratulation , winner is ${winner}`;
    msgcontainer.classList.remove ("hide");
    disabledboxes();

};

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" &&  pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log ("winner" , pos1val);
                showWinner(pos1val);
            }
        }

    }
};

newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);