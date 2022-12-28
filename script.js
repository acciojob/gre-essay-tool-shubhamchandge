//your code here
let text = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

text.addEventListener("input", ()=>{
    letterCount.innerHTML=text.value.length;
})

console.log("working");
