let count = 0
let countIn = document.getElementById("score_board")
let saveIn = document.getElementById("previous")

function increment(){
    count += 1;
    countIn.innerText = count
}

function save(){
    
    saveIn.textContent +=  " - " + countIn.innerText + "  "
    count = 0;
    countIn.innerText = 0;
}