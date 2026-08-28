function pyramid(chr, rows, isInverted){
  let result = ""
  for(let i = 0; i < rows; i++){
    let chr_in_row = 0;
    let spaces = 0;
    if(isInverted){
      chr_in_row = rows-i;
      spaces = i
    }else{
      chr_in_row = i+1;
      spaces = rows-i-1;
    }
    result += "\n"+" ".repeat(spaces)+chr.repeat(chr_in_row*2-1)
  }
  return result+"\n";
}

console.log(pyramid("o", 4, false));