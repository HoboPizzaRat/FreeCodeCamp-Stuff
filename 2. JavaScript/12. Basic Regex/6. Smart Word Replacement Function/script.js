function myReplace(msg, wToReplace, wReplacement){
  let isStartUpper = /^[A-Z].*/;
  let result = "";
  let replacement = ""
  if(wToReplace.match(isStartUpper)){
    replacement = wReplacement.slice(0,1).toUpperCase()+wReplacement.slice(1).toLowerCase();
  }
  else{
    replacement = wReplacement.toLowerCase()
  }
  result = msg.replace(wToReplace, replacement);  
  return result;
}

console.log(myReplace("His name is Tom", "Tom", "john"));