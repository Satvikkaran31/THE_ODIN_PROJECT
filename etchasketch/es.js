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

        griditem.addEventListener("mouseover",()=>{
            let curr_opac = parseFloat(griditem.style.opacity)||0;
            if(curr_opac<1){
            griditem.style.opacity = curr_opac+0.1;
            }

        });
        container.appendChild(griditem);
    }
}
}
n = 16*16;
for(let i = 0;i<n;i++){
    const griditem = document.createElement('div');
    griditem.classList.add("grid_box");
    const container = document.querySelector(".container");

    griditem.addEventListener("mouseover",()=>{
        let curr_opac = parseFloat(griditem.style.opacity)||0;
        if(curr_opac<1){
        griditem.style.opacity = curr_opac+0.1;
        }

    });
    container.appendChild(griditem);
}
function refresh(){
    const container = document.querySelector(".container");
    for (let i = 0;i<container.children.length;i++){
        container.children[i].style.opacity = "0";
    }
}
function view(){
    const container = document.querySelector(".container");
    for (let i = 0;i<container.children.length;i++){
        container.children[i].style.border = "1px solid green";
    }
}
function noview(){
    const container = document.querySelector(".container");
    for (let i = 0;i<container.children.length;i++){
        container.children[i].style.border = "none";
    }
}
document.getElementById("btn").addEventListener("click",gridsize);
document.getElementById("btn_refresh").addEventListener("click",refresh);
document.getElementById("btn_view").addEventListener("click",view);
document.getElementById("btn_noview").addEventListener("click",noview);