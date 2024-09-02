let changebgcolor = document.querySelector(".box2-box");
let btn = document.querySelector("#btn");
btn.onclick = () =>{
    changebgcolor.style.backgroundColor = "blue";
    alert("color changed!!");
    changebgcolor.textContent = "color has been changed to blue"
};
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
changebgcolor.style.backgroundColor = " white";
alert("COLOR REVERSED !");
}