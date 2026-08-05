let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

let fortunes = [fortune1, fortune2, fortune3, fortune4, fortune5];

let randomNumber = Math.floor((Math.random()*(5))+1);

let selectedFortune = fortunes[randomNumber-1];
console.log(selectedFortune);