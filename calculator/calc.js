let displaynum_1,displaynum_2,operator;

function buttonclick(event){
        const buttonId = event.target.id;
        let num = buttonId.slice(-1);
        switch(buttonId){
            case "clear":
                clear();
                console.log("Clear pressed");
                break;
              case "backspace":
                backspace();
                console.log("Backspace pressed");
                break;
              case "decimal":
                displaytext(".")
                console.log("Decimal pressed");
                break;
              case "divide":
                displaytext("/")
                console.log("Divide pressed");
                break;
              case "mul":
                displaytext("X")
                console.log("Multiply pressed");
                break;
              case "sub":
                displaytext("-")
                console.log("Subtract pressed");
                break;
              case "add":
                displaytext("+")
                console.log("Add pressed");
                break;
              case "equal":
                // displaytext("=")
                console.log("Equal pressed");
                break;

              default:
                if(!isNaN(num)){
                    displaytext(num);
                }
                break;
        }
    };
const button_pressed = document.querySelectorAll(".input_button,.input_button_wide");
button_pressed.forEach(buttons =>{
    buttons.addEventListener("click",buttonclick);
});
const textarea = document.querySelector(".textarea");
function displaytext(input){
    const str = textarea.textContent;
    const slice = str.slice(-1)
        if(str == "0"){
            textarea.textContent = `${input}`
        }

        else if(slice == "+"||slice == "-"||slice == "X"||slice == "/"){
            if (input === "+" || input === "-" || input === "X" || input === "/") {return;}
            else{textarea.textContent = `${str}${input}`;}
        }

        else{
        textarea.textContent = `${str}${input}`;
    }
}

function backspace(){
    const str = textarea.textContent
    if(str.length>1){
    textarea.textContent = str.slice(0,str.length-1)
    }
    else{
        textarea.textContent = 0;
    }
}

function clear(){
    textarea.textContent = "0"; 
}