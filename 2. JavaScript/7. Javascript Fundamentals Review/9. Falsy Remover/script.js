function bouncer(arr){
  let arr_truthy_only = []
  for(let item of arr){
    if(item){
      arr_truthy_only.push(item);
    }
  }
  return arr_truthy_only;
}

console.log(bouncer([7, "ate", "", false, 9]))