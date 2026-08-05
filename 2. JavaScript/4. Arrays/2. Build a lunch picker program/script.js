const lunches = [];

function addLunchToEnd(arr, lunch){
  arr.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, lunch){
  arr.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr){
  let removed = arr.pop();
  if(removed){
    console.log(`${removed} removed from the end of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr){
  let removed = arr.shift();
  if(removed){
    console.log(`${removed} removed from the start of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr){
  if(arr.length == 0){
    console.log("No lunches available.");
    return;
  }
  let randIndex = Math.floor(Math.random() * arr.length);
  let randLunch = arr[randIndex];
  console.log(`Randomly selected lunch: ${randLunch}`);
}

function showLunchMenu(arr){
  if(arr.length == 0){
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}