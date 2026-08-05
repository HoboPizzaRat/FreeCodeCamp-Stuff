let count = 0;

function cardCounter(card){
  if(typeof card == "string"){
    count--;
  }else{
    if(card >= 2 && card <= 6){
      count++;
    }else if(card >= 7 && card <= 9){
      /* doing nothing */
    }else{
      count--;
    }
  }
  if(count > 0){
    return `${count} Bet`;
  }else{
    return `${count} Hold`;
  }
}
