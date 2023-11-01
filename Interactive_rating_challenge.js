const rate_button1 = document.getElementById("b1");
const rate_button2 = document.getElementById("b2");
const rate_button3 = document.getElementById("b3");
const rate_button4 = document.getElementById("b4");
const rate_button5 = document.getElementById("b5");
const submit_button = document.getElementById("submit_button");
const thank_you_section = document.querySelector("#box3")
//const rate = document.getElementById("rate")
const rating_section = document.querySelector("#box1")




function select_button(e){
    console.log(e.target.innerHTML)
}
function showorhide(a){
    thank_you_section.style.display = "flex";
    rating_section.style.display = "none"
 }

rate_button1.addEventListener("click",select_button);
rate_button2.addEventListener("click",select_button);
rate_button3.addEventListener("click",select_button);
rate_button4.addEventListener("click",select_button);
rate_button5.addEventListener("click",select_button);
submit_button.addEventListener("click",showorhide);
