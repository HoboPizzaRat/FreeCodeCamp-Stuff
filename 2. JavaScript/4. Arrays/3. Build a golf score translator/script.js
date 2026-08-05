const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


function golfScore(par, strokes){
  let difference = strokes - par;

  if(strokes == 1){
    return names[0];
  }
  else if(difference <= -2){
    return names[1];
  }
  else if(difference == -1){
    return names[2];
  }
  else if(difference == 0){
    return names[3];
  }
  else if(difference == 1){
    return names[4];
  }
  else if(difference == 2){
    return names[5];
  }
  return names[6];
}