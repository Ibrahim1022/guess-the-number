//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1
console.log(Math.trunc(Math.random()* 20) +1)
document.querySelector(".check").addEventListener("click", function(){

// Get users input
const input = document.querySelector(".guess").value
console.log(input);
document.querySelector(".number").textContent = randomNumber;
if(input === randomNumber){
    document.querySelector("body").style.backgroundColor = "green";
    console.log("Correct!");
}else{
    document.querySelector(".message").textContent = "Wrong Number!"; 
} 
})

// background changes to green
// message should be correct number
// should display random number