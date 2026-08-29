function sumFibs(num){
  let previous = 0;
  let fib = 0;
  let sum = 0;
  while(fib <= num){
    console.log(fib)
    if(fib == 0){
      fib = 1
      previous = 0;
      continue;
    }
    if(fib % 2 != 0){
      sum += fib
    }
    let next = previous + fib;
    previous = fib;
    fib = next;
  }
  return sum;
}
console.log("sum")
console.log(sumFibs(4));