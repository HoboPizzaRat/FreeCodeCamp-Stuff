let pairs = {
  "A": "T",
  "T": "A",
  "C": "G",
  "G": "C"
}
function pairElement(str){
  let output = [];
  for(let elem of str){
    let pair = pairs[elem];
    output.push([elem, pair])
  }
  return output;
}
console.log(pairElement("ATCGA"))