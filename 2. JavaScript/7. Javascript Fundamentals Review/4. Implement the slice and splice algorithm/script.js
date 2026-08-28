function frankenSplice(arr1, arr2, i){
  let franked = arr2.slice(0, i);
  franked.push(...arr1);
  franked.push(...arr2.slice(i));
  return franked;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))