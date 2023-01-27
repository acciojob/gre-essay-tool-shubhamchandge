
let text = document.getElementById("evaluatedText");
let counter = document.getElementById("wordCount");

text.addEventListener("input", () => {
  let count = 0;
  let word = text.value;
  //console.log(word);

  let arr = Array.from(word)
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " " && arr[i + 1] != " ") {
      count = count + 1;
    }
  }

  // console.log(count);

  counter.innerHTML = count;
});