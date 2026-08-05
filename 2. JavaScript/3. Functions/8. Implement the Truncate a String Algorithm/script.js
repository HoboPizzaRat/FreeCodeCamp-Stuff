function truncateString(sentence, limit){
  if(sentence.length > limit){
    return sentence.slice(0,limit)+"...";;
  }
  return sentence;
}

let result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(result);