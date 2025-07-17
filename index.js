let display = document.getElementById("display");
let history = document.getElementById("history");

//add value to the display

function appendToDisplay(value){
    if (display.innerText === "0"){
        display.innerText = value;
    }
    else{
        display.innerText += value;
    }
}

// clearing the entire display already written

function clearDisplay(){
    display.innerText = "0";
    history.innerText = "";
}

//delete the last character
function deleteLast(){
    let current = display.innerText;

    // if it is already showing "Error", reaet to "0"
    if (current === "Error"){
        display.innerText= "0";
        return;
    }

    // if current has more than one character, remove the last one
    else if(current.length >= 1){
        display.innerText = current.slice(0, -1);
    }
    else{
        // if only one character is left, reset to "0"
        display.innerText = "0";
    }
}

function calculate(){
    try {
        const expression = display.innerText;
        const result = eval(expression); // evaluates the string expression

        history.innerText = expression + "=" + " " + result ;
        display.innerText = result;
    }
    catch(error){
        display.innerText = "Error";
    }
    
}