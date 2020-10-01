let turn="X";
let win=false;
let pmesage=document.getElementById('mesage');

let reset_button=document.getElementById('reset');
reset_button.addEventListener("click", function (){
    turn="X";
    for(thisButton of myButtons){
        thisButton.style.background="khaki";
        thisButton.textContent = "";
    }
    win=false;
    pmesage.textContent="";
});

let myButtons=document.getElementsByClassName("Button");

for(thisButton of myButtons){
    pmesage.textContent="";
    thisButton.addEventListener("click", function (){
        if(!win) {
            if(this.textContent == ""){
                console.log(this.id);
                this.textContent = turn;
                chek();
                next();
                console.log(turn);
            }else{
                pmesage.textContent="Already filled out!";
            }
        }
    });
}

function next ()
{
    if (turn == "X"){
        turn="O";
    }else{
        turn = "X";
    }
}

function chek (){
    linChek(0, 1, 2);
    linChek(3, 4, 5);
    linChek(6, 7, 8);
    linChek(0, 4, 8);
    linChek(2, 4, 6);
    linChek(0, 3, 6);
    linChek(1, 4, 7);
    linChek(2, 5, 8);
}

function linChek(poz1, poz2, poz3){
    if(myButtons[poz1].textContent == myButtons[poz2].textContent && myButtons[poz2].textContent == myButtons[poz3].textContent && myButtons[poz1].textContent != ""){
        pmesage.textContent= turn + " Winn !!!";
        win=true;
        myButtons[poz1].style.background="#35f035";
        myButtons[poz2].style.background="#35f035";
        myButtons[poz3].style.background="#35f035";
    }
}
