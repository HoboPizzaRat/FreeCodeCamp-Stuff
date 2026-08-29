let inventory = []

function findProductIndex(productName){
  for(let i = 0; i < inventory.length; i++){
    if(inventory[i].name == productName.toLowerCase()){
      return i;
    }
  }
  return -1;
}
function addProduct(product_obj){
  let index = findProductIndex(product_obj.name);
  let product_name = product_obj.name.toLowerCase();
  if(index == -1){
    product_obj.name = product_obj.name.toLowerCase();
    inventory.push(product_obj);
    console.log(product_name+" added to inventory");
  }else{
    inventory[index].quantity += product_obj.quantity;
    console.log(product_name+" quantity updated")
  }
}
function removeProduct(productName, quantity){
  productName = productName.toLowerCase();
  let index = findProductIndex(productName);
  if(index == -1){
    console.log(`${productName} not found`);
    return
  }
  let product_in_inventory = inventory[index].quantity;
  let product_count_after_removal = product_in_inventory - quantity;
  if(product_count_after_removal < 0){
    console.log(`Not enough ${productName} available, remaining pieces: ${product_in_inventory}`)
    return
  }
  if(product_count_after_removal == 0){
    inventory.splice(index, 1);
    return
  }
  inventory[index].quantity = product_count_after_removal;
  console.log(`Remaining ${productName} pieces: ${product_count_after_removal}`);
}
addProduct({name: "FLOUR", quantity: 5})
addProduct({name: "FLOUR", quantity: 5})
removeProduct("FLOUR", 5)
removeProduct("FLOWER", 5)