

function getinputvalue(){
    let shoppinginput = document.getElementById('shoppinginput');
    let inputvalue = shoppinginput.value;
    shoppinginput.value = "";
    return inputvalue;
}

let addbutton = document.getElementById("additem");
let parentlist = document.querySelector('.shoppinglist')

function updatelist(){
    let inputValue = getinputvalue();

    if(inputValue!=""){
    let delete_button = document.createElement("button");
    const list_item= document.createElement("li");
    list_item.textContent = `${inputValue}      ` ;

    delete_button.textContent = "delete item";
    list_item.appendChild(delete_button);   

    parentlist.appendChild(list_item);

    delete_button.addEventListener("click",()=>
        {
            parentlist.removeChild(list_item);
        }
    )
    }  
    else{
    document.querySelector('input').focus();
    }
    
}

