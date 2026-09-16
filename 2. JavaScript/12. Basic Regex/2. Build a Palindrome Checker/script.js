let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

function checkPalindrome(candidate){
  let cleanRegex = /[^A-Za-z0-9]/g;
  let cleaned = candidate.replace(cleanRegex, "").toLowerCase()
  let reversed = cleaned.split("").reverse().join("").toLowerCase();
  console.log(reversed);
  console.log(cleaned);
  return cleaned == reversed;
}
function updateOutput(isPalindrome, candidate){
  if(isPalindrome){
    result.textContent = `${candidate} is a palindrome`
  }else{
    result.textContent = `${candidate} is not a palindrome`
  }
}
checkBtn.addEventListener("click", () => {
  if(textInput.value == ""){
    alert("Please input a value");
  }else{
    let isPalindrome = checkPalindrome(textInput.value);
    updateOutput(isPalindrome, textInput.value);
  }
})