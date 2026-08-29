function sumAll(arr){
  let sum = 0;
  let small = arr[0] > arr[1] ? arr[1] : arr[0];
  let big = arr[0] > arr[1] ? arr[0] : arr[1];
  for(let i = small; i <= big; i++){
    sum += i;
  }
  return sum;
}

console.log(sumAll([4,1]))