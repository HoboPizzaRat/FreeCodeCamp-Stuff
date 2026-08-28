function isPalindrome(word){
  let reversed = word.replace(/\s/g, "").split("").reverse().join("").toLowerCase();
  //console.log(reversed);
  return word.toLowerCase() == reversed;
}
function findPalindromeBreaks(words){
  const result = []
  if(words.lenght == 0) return result;

  for(let index in words){
    let isWordPalindrome = isPalindrome(words[index]);
    if(!isWordPalindrome){
      result.push(Number(index));
    }
  }
  return result;
}
function findRepeatedPhrases(arr, phraseLength){
  let dict = {}
  for(let i = 0; i <= arr.length-phraseLength; i++){
    let phrase = arr.slice(i, i+phraseLength);
    if(dict[phrase] == undefined){
      dict[phrase] = {
        index: [],
        count: 0
      }
    }
    dict[phrase].index.push(i);
    dict[phrase].count += 1
  }
  let result = [];
  for(let key of Object.keys(dict)){
    if(dict[key].count > 1){
      result.push(...dict[key].index);
    }
  }
  return result;
}
function analyzeTexts(texts, phraseLength){
  let result = [];
  for(let text of texts){
    let obj = {
      palindromeBreaks: findPalindromeBreaks(text),
      repeatedPhrases: findRepeatedPhrases(text, phraseLength)
    }
    result.push(obj);
  }
  return result;
}
let words = ["one", "two", "three", "one", "two"]
console.log(findPalindromeBreaks(words));
console.log(findRepeatedPhrases(words, 2));
console.log(analyzeTexts(words, 2))