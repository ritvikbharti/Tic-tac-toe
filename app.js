let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector(".new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turno = true;
document.write("Helo everyone");
const winnerPattern = [[0,1,2],
                        [0,3,6],
                        [0,4,8],
                        [1,4,7],
                        [2,5,8],
                        [2,4,6],
                        [3,4,5],
                        [6,7,8]];

const resetGame = ()=>{
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let c =0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerHTML = "O";
            turno =false;
        }else{
            box.innerHTML="X";
            turno=true;
        }
        box.disabled =true;
        c++;
        checkWinner();
        if(c===9){
            Draw();
        }
    })
})

const showWinner = (Winner)=>{
    msg.innerText = `Congratulations,winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const Draw = ()=>{
    msg.innerText = 'Draw';
    msgContainer.classList.remove("hide");
}
const checkWinner = ()=>{
    let c =0;
    for(let pattern of winnerPattern){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val!= ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
        c++;
    }
    if(c===9){
       Draw(); 
    }
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


