function chunkArrayInGroups(arr, num){
  let chunked = []
  for(let i = 0; i < arr.length; i += num){
    chunked.push(arr.slice(i, i+num));
  }
  return chunked;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))