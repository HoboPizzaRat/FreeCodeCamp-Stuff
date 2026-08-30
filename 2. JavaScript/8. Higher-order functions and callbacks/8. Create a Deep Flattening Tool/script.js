function steamrollArray(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      result = [...result, ...steamrollArray(arr[i])]
    }else{
      result = [...result, arr[i]]
    }
  }
  return result;
}
console.log(steamrollArray([[["a"]], [["b"]]]))
console.log(steamrollArray([1, [2], [3, [[4]]]]))