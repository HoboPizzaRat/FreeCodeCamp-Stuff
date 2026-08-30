function diffArray(arr1, arr2){
  let symmetricDiff = [];
  symmetricDiff = [...arr2.filter((item) => 
    !arr1.includes(item))];
  symmetricDiff = [...arr1.filter((item) => 
    !arr2.includes(item)), ...symmetricDiff];
  return symmetricDiff;
}
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]))
