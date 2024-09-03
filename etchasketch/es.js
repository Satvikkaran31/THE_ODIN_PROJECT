function gridsize(){
    let pval = prompt("Enter the grid size you want:");
    if(pval>100 || pval<1){
        alert("ENTER BETWEEN 1 AND 100!");
    }
    else{
    const container = document.querySelector(".container");    
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(let i = 0;i<pval*pval;i++){
        const griditem = document.createElement('div');
        griditem.classList.add("grid_box");
        griditem.setAttribute("style", `min-width: calc(100%/${pval}); min-height: calc(100%/${pval});`)
        container.appendChild(griditem);
    }
}
}
n = 16*16;
for(let i = 0;i<n;i++){
    const griditem = document.createElement('div');
    griditem.classList.add("grid_box");
    const container = document.querySelector(".container");
    container.appendChild(griditem);
}
document.getElementById("btn").addEventListener("click",gridsize);