const rate_button1 = document.getElementById("b1");
const rate_button2 = document.getElementById("b2");
const rate_button3 = document.getElementById("b3");
const rate_button4 = document.getElementById("b4");
const rate_button5 = document.getElementById("b5");
const submit_button = document.getElementById("submit_button");
const thank_you_section = document.querySelector("#box3");
const rate = document.getElementById("rate");
const rating_section = document.querySelector("#box1");
const rate_again_button = document.getElementById("rate_again_button");




function select_button(e){
    let button_number = e.target.innerHTML;
    console.log(button_number)
    rate.innerHTML = button_number
}
function showorhide(){
    thank_you_section.style.display = "flex";
    rating_section.style.display = "none"
}
function showorhide2(){
    thank_you_section.style.display = "none";
    rating_section.style.display = "flex"
}

rate_button1.addEventListener("click",select_button);
rate_button2.addEventListener("click",select_button);
rate_button3.addEventListener("click",select_button);
rate_button4.addEventListener("click",select_button);
rate_button5.addEventListener("click",select_button);
submit_button.addEventListener("click",showorhide);
rate_again_button.addEventListener("click",showorhide2);