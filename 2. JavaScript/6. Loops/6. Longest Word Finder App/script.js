function findLongestWordLength(str){
  let longestLength = 0;
  for(let word of str.split(" ")){
    if(word.length >= longestLength){
      longestLength = word.length;
    }
  }
  return longestLength;
}