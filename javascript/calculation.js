const first = document.querySelector(".first");
const second = document.querySelector(".second");
const form = document.querySelector(".form");
const symbol = document.querySelector(".symbol");
let opraTion = localStorage.getItem("oparation");
let level = localStorage.getItem("level");
let firstValue;
let secondValue;
let result;

function valueSetter(level) {
    if (level == "easy") {
        firstValue = Math.round(Math.random() * 10);
        secondValue = Math.round(Math.random() * 10);
        first.innerText = firstValue;
        second.innerText = secondValue;
    }
    else if (level == "medium") {
        firstValue = Math.round(Math.random() * 100);
        secondValue = Math.round(Math.random() * 100);
        first.innerText = firstValue;
        second.innerText = secondValue;
    }
    else if (level == "hard") {
        firstValue = Math.round(Math.random() * 1000);
        secondValue = Math.round(Math.random() * 1000);
        first.innerText = firstValue;
        second.innerText = secondValue;
    }
}

valueSetter(level);

function add() {
    
    if (opraTion === "add") {
        symbol.innerText = "+"
        result = firstValue + secondValue;
        form.addEventListener("keyup", (event)=>{
            event.preventDefault()
            if(Number(event.target.value) === result){
                console.log(result)
                
                valueSetter(level);
                result = firstValue + secondValue;
                form.reset();
            }
        })
    }
    console.log(result)
    
}

function sub() {
    if (opraTion === "sub") {
        symbol.innerText = "-"
        result = firstValue - secondValue;
        form.addEventListener("keyup", (event)=>{
            event.preventDefault()
            if(Number(event.target.value) === result){
                console.log(result)
                
                valueSetter(level);
                result = firstValue - secondValue;
                form.reset();
            }
        })
    }
    console.log(result)
    
}

function mul() {
    if (opraTion === "mul") {
        symbol.innerText = "×"
        result = firstValue * secondValue;
        form.addEventListener("keyup", (event)=>{
            event.preventDefault()
            if(Number(event.target.value) === result){
                console.log(result)
                
                valueSetter(level);
                result = firstValue * secondValue;
                form.reset();
            }
        })
    }
    console.log(result)
    
}

function div() {
    if (opraTion === "div") {
        symbol.innerText = "÷"
        result = Math.round((firstValue/secondValue) * 100)/100;
        
        form.addEventListener("keyup", (event)=>{ 
            event.preventDefault()
            if(Number(event.target.value) === result){

                valueSetter(level);
                result =  Math.round((firstValue/secondValue) * 100)/100;;
                form.reset();
                
            }
        })
    }
    
}

add();
sub();
mul();
div();

