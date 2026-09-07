const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags(){
  let flags = "";
  flags += caseInsensitiveFlag.checked ? "i" : "";
  flags += globalFlag.checked ? "g" : ""; 
  return flags;
}
testButton.addEventListener("click", () => {
  let regex = new RegExp(regexPattern.value, getFlags());
  let str = stringToTest.textContent;
  try{
    let found = str.match(regex).join(", ");
    let outputSpan = str.replace(regex, function replace(match) { 
    return '<span class="highlight">' + match + '</span>'; 
});
    testResult.innerHTML = found;
    stringToTest.innerHTML = outputSpan;
  }
  catch{
    testResult.innerHTML = "no match"
  }
});