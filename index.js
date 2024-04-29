let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGamebtn = document.querySelector("#newGamebtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;

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
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("box clicked");
        if(turnX){
            console.log("X");
            box.textContent = "X";
            turnX = false;
        }
        else{
            box.textContent = "O";
            console.log("O");
            turnX = true;
        }
        box.disabled = true;

        // console.log(boxes[winPatterns[0][0]].textContent);
        checkWinner();
    })
});

const checkWinner = () =>{
    // for(let i=0;i<8;i++){
    //     console.log(winPatterns[i]);
    // }   OR 

    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1val = boxes[pattern[0]].textContent;
        let pos2val = boxes[pattern[1]].textContent;
        let pos3val = boxes[pattern[2]].textContent;
        
        if(pos1val != "" && pos2val != "" && pos3val !=""){

            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("Winner is ",pos1val);
                showWinner(pos1val);
            }

        }
    }
}
const showWinner = (val) =>{
    console.log("Winner is ",val);
    msg.textContent = `Congratulations, Winner is ${val}`;
    msgContainer.classList.remove("hide");
    disableBox();
}
const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.textContent = "";
    }
}
const resetGame = () =>{
    turnX = true;
    enableBox();
    msgContainer.classList.add("hide");
}
reset.addEventListener("click",resetGame);
newGamebtn.addEventListener("click",resetGame);
