function dropElements(arr, func){
  let result = arr.slice();
  while(result.lenght != 0){
    let elem = result[0];
    if(func(elem)){
      break;
    }else{
      result.shift();
    }
  }
  return result;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
