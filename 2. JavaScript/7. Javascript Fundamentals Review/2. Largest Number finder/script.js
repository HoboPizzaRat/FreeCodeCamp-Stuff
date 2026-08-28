function largestOfAll(arr2d){
  let largest_all = [];
  for(let arr of arr2d){
    let largest_of_arr = undefined;
    for(let num of arr){
      if(largest_of_arr == undefined || num > largest_of_arr){
        largest_of_arr = num;
      }
    }
    largest_all.push(largest_of_arr);
  }
  return largest_all;
}
console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));