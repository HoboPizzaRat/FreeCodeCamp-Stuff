function titleCase(str){
  let output = [];
  for(let word of str.split(" ")){
    let word_capitalized = word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase();
    output.push(word_capitalized);
  }
  return output.join(" ")
}

console.log(titleCase("I like to code"))