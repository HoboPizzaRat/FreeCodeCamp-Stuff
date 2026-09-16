function translatePigLatin(msg){
  let startsConsonant = /^[^aeiou].*/;
  let matchConsonantCluster = /^[^aeiou]+/;
  let startsVowel = /^[aeiou]+.*/;
  let result = "";

  if(msg.match(startsConsonant)){
    let match = msg.match(matchConsonantCluster);
    let len = match[0].length;
    console.log(len)
    result = msg.slice(len)+msg.slice(0,len)+"ay";
  }
  else if(msg.match(startsVowel)){
    result = msg+"way";
  }
  return result;
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));