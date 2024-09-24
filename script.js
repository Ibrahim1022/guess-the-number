//code 
let randomNumber = Math.trunc(Math.random() * 20) + 1; // 1 - 20 number
let score = 20
 let highScore = 0 

document.querySelector(".check").addEventListener("click",function(){
 // if score = 0 
 if(score === 0) return 
 //1. Get users input 
 const input = document.querySelector(".guess").value * 1 //number //1. check if correct or not 
 if(input === randomNumber){ 
 //1. background changes to green 
document.querySelector("body").style.backgroundColor = "green" 
//2. message should be 'correct number'
document.querySelector(".message").innerText = "Correct Number!" 
//3. ? should display random number 
document.querySelector(".number").innerText = randomNumber 
//check highscore score > highscore change highscore 
if(score > highScore){ 
//1.highscore innertext score 
document.querySelector(".highscore").innerText = score
} 
 }else { 
//1. -1 from score 
 score-- 
//2. display the new score 
document.querySelector(".score").innerText = score 
if(score === 0){ 
//1. background changes to red 
document.querySelector("body").style.backgroundColor = "red" 
//2. message should be 'game over' 
document.querySelector(".message").innerText = "Game Over!"
return 
} 
//3. display "too high" or "too low" 
if(input > randomNumber){ document.querySelector(".message").innerText = "Too High!" 
}
else{ 
document.querySelector(".message").innerText = "Too Low!"
 } 
 } 
 }) 
 
 document.querySelector(".again").addEventListener("click",function(){ 
 // code again
  })