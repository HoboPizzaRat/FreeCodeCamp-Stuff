function uniteUnique(...arrs){
  let union = []
  while(arrs.length != 0){
    for(let item of arrs[0]){
      if(!union.includes(item)){
        union.push(item);
      }
    }
    arrs = arrs.slice(1);
  }
  return union
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));