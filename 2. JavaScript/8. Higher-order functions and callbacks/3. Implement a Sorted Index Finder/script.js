function getIndexToIns(arr, num){
  arr.sort((a, b) => a - b);
  let index = arr.findIndex((i) => i >= num);
  return index == -1 ? arr.length : index;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([5, 3, 20, 3], 5))
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
console.log(getIndexToIns([3, 10, 5], 11))