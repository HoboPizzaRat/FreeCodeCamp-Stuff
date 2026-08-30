function destroyer(arr, ...rest){
  return arr.filter(num => !rest.includes(num));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))