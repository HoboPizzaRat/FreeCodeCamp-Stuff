function truthCheck(collection, pre) {
  for(let item of collection){
    if(item[pre]){
      continue;
    }else{
      return false;
    }
  }
  return true;
}

console.log(truthCheck(
    [
        {name: "Quincy", role: "Founder", isBot: false}, 
        {name: "Naomi", role: "", isBot: false}, 
        {name: "Camperbot", role: "Bot", isBot: true}
    ], 
    "isBot"
));