function confirmEnding(sentence, ending){
  let sentenceEnd = sentence.slice(sentence.length - ending.length);
  console.log(sentenceEnd);
  if(ending == sentenceEnd){
    return true;
  }
  return false;
}

let result = confirmEnding("Bastian", "n")
console.log(result)