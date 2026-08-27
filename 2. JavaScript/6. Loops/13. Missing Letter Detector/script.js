function fearNotLetter(str){
  let start = str.charCodeAt(0);
  let end = str.charCodeAt(str.length-1);
  let index = 0;
  for(let i = start; i <= end; i++){
    let c = str[index].charCodeAt(0);
    if(c != i){
      return String.fromCharCode(i);
    }
    index++;
  }
  return undefined;
}

console.log(fearNotLetter("abce"));