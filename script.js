const leftInput = document.querySelector(".left");
const rightInput = document.querySelector(".right");
const input = document.querySelectorAll(".input");
const leftOutput = document.querySelector(".fa-balance-scale-left");
const balanceOutput = document.querySelector(".fa-balance-scale");
const rightOutput = document.querySelector(".fa-balance-scale-right");
const button = document.querySelector("button");

input.forEach(inputs => {
    inputs.addEventListener('input', function(){
        if(leftInput.value == rightInput.value){
            balanceOutput.style.display = "block";
            rightOutput.style.display = "none";
            leftOutput.style.display = "none";
        }else if(leftInput.value > rightInput.value){
            leftOutput.style.display = "block";
            balanceOutput.style.display = "none";
            rightOutput.style.display = "none";
        }else {
            rightOutput.style.display = "block";
            balanceOutput.style.display = "none";
            leftOutput.style.display = "none";
        }
    })
})
// button.addEventListener('click', function(){
//         if(leftInput.value == rightInput.value){
//             balanceOutput.style.display = "block";
//             rightOutput.style.display = "none";
//             leftOutput.style.display = "none";
//         }else if(leftInput.value > rightInput.value){
//             leftOutput.style.display = "block";
//             balanceOutput.style.display = "none";
//             rightOutput.style.display = "none";
//         }else {
//             rightOutput.style.display = "block";
//             balanceOutput.style.display = "none";
//             leftOutput.style.display = "none";
//         }
// })