const charCount = document.getElementById("char-count");
const textInput = document.getElementById("text-input");

function updateCounter(value){
  const value_len = value.length;
  if(value_len < 50){
    charCount.classList.remove("red");
    textInput.classList.remove("red");
  }else{
    textInput.value = value.slice(0,50);
    charCount.classList.add("red");
    textInput.classList.add("red");
  }
  charCount.textContent = `Character Count: ${value_len}/50`
  console.log("this occurs")
}
textInput.addEventListener("change", (event) => {
  console.log("this");
  updateCounter(event.target.value);
});