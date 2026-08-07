function mutation(arr){
  let toBeCompared = arr[0];
  let toBeProcessed = arr[1];

  loopStart: for(let cc of toBeProcessed.toLowerCase().split("")){

    console.log("this")
    for(let cp of toBeCompared.toLowerCase().split("")){
      if(cc == cp){
        console.log("wut")
        continue loopStart;
      }
    }
    return false;
  }
  return true;
}

console.log(mutation(["hello", "Hello"]));