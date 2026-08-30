function whatIsInAName(arr, source_obj){
  let filtered = [];
  for(let item of arr){
    let isContainAllSourceProperties = true;
    innerLoop: for(let property of Object.keys(source_obj)){
      if(source_obj[property] != item[property]){
        isContainAllSourceProperties = false
        break innerLoop;
      }
    }
    if(isContainAllSourceProperties){
      filtered.push(item);
    }
  }
  return filtered;
}

console.log(whatIsInAName(
    [
        { first: "Romeo", last: "Montague" }, 
        { first: "Mercutio", last: null }, 
        { first: "Tybalt", last: "Capulet" }
    ], 
    { last: "Capulet" }
));