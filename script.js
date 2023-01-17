//your code here
let text = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

text.addEventListener("input", ()=>{
   const textvalue = text.slice(" ")
	letterCount.innerhtml= textvalue.value;
})


