let turn="X";
console.log(turn);
let pmesage=document.getElementById('mesage');

let reset_button=document.getElementById('reset');
reset_button.addEventListener("click", function (){
    b11_button.textContent = "";
    b12_button.textContent = "";
    b13_button.textContent = "";
    b21_button.textContent = "";
    b22_button.textContent = "";
    b23_button.textContent = "";
    b31_button.textContent = "";
    b32_button.textContent = "";
    b33_button.textContent = "";
});

let b11_button=document.getElementById('b11');
b11_button.addEventListener("click", function (){
    pmesage.textContent="";
    if(b11_button.textContent == ""){
        b11_button.textContent = turn;
    }else{
        pmesage.textContent="Already filled out!";
    }
    chek();
    next();
});

let b12_button=document.getElementById('b12');
b12_button.addEventListener("click", function (){
    pmesage.textContent="";
    if(b12_button.textContent == ""){
        b12_button.textContent = turn;
    }else{
        pmesage.textContent="Already filled out!";
    }
    chek();
    next();
});

let b13_button=document.getElementById('b13');
b13_button.addEventListener("click", function (){
    pmesage.textContent="";
    if(b13_button.textContent == ""){
        b13_button.textContent = turn;
    }else{
        pmesage.textContent="Already filled out!";
    }
    chek();
    next();
});

let b21_button=document.getElementById('b21');
b21_button.addEventListener("click", function (){
    pmesage.textContent="";
    if(b21_button.textContent == ""){
        b21_button.textContent = turn;
    }else{
        pmesage.textContent="Already filled out!";
    }
    chek();
    next();
});

let b22_button=document.getElementById('b22');
b22_button.addEventListener("click", function (){
    pmesage.textContent="";
    if(b22_button.textContent == ""){
        b22_button.textContent = turn;
    }else{
        pmesage.textContent="Already filled out!";
    }
    chek();
    next();
});

let b23_button=document.getElementById('b23');
b23_button.addEventListener("click", function (){
    pmesage.textContent="";
    if(b23_button.textContent == ""){
        b23_button.textContent = turn;
    }else{
        pmesage.textContent="Already filled out!";
    }
    chek();
    next();
});

let b31_button=document.getElementById('b31');
b31_button.addEventListener("click", function (){
    pmesage.textContent="";
    if(b31_button.textContent == ""){
        b31_button.textContent = turn;
    }else{
        pmesage.textContent="Already filled out!";
    }
    chek();
    next();
});

let b32_button=document.getElementById('b32');
b32_button.addEventListener("click", function (){
    pmesage.textContent="";
    if(b32_button.textContent == ""){
        b32_button.textContent = turn;
    }else{
        pmesage.textContent="Already filled out!";
    }
    chek();
    next();
});

let b33_button=document.getElementById('b33');
b33_button.addEventListener("click", function (){
    pmesage.textContent="";
    if(b33_button.textContent == ""){
        b33_button.textContent = turn;
    }else{
        pmesage.textContent="Already filled out!";
    }
    chek();
    next();
});

function next ()
{
    if (turn == "X"){
        turn="O";
    }else{
        turn = "X";
    }
}

function chek (){
    if(b11_button.textContent == b12_button.textContent && b12_button.textContent == b13_button.textContent && b11_button.textContent != ""){
        pmesage.textContent= turn + " Winn !!!";
    }
    if(b21_button.textContent == b22_button.textContent && b22_button.textContent == b23_button.textContent && b21_button.textContent != ""){
        pmesage.textContent= turn + " Winn !!!";
    }
    if(b31_button.textContent == b32_button.textContent && b32_button.textContent == b33_button.textContent && b31_button.textContent != ""){
        pmesage.textContent= turn + " Winn !!!";
    }
    if(b11_button.textContent == b21_button.textContent && b21_button.textContent == b31_button.textContent && b11_button.textContent != ""){
        pmesage.textContent= turn + " Winn !!!";
    }
    if(b12_button.textContent == b22_button.textContent && b22_button.textContent == b32_button.textContent && b12_button.textContent != ""){
        pmesage.textContent= turn + " Winn !!!";
    }
    if(b13_button.textContent == b23_button.textContent && b23_button.textContent == b33_button.textContent && b13_button.textContent != ""){
        pmesage.textContent= turn + " Winn !!!";
    }
    if(b11_button.textContent == b22_button.textContent && b33_button.textContent == b22_button.textContent && b11_button.textContent != ""){
        pmesage.textContent= turn + " Winn !!!";
    }
    if(b13_button.textContent == b22_button.textContent && b22_button.textContent == b31_button.textContent && b13_button.textContent != ""){
        pmesage.textContent= turn + " Winn !!!";
    }
}

