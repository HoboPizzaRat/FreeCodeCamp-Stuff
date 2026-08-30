function smallestCommons(arr){
  let smaller = arr[0] < arr[1] ? arr[0] : arr[1];
  let bigger = arr[0] < arr[1] ? arr[1] : arr[0];
  let counter = 2;
  loop: while(true){
    for(let j = smaller; j <= bigger; j++){
      if(counter % j != 0){
        //console.log(j)
        counter++;
        continue loop;
      }
    }
    return counter;
  }
}

console.log(smallestCommons([1, 5]) )