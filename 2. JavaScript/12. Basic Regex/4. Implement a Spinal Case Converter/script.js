function spinalCase(msg){
  let regex = /(?=[A-Z _\-])/;
  let splitted = msg.split(regex);
  let filtered = splitted.filter(item => !(item == "_" || item == " " || item == "-"));
  let cleaned = filtered.map(
    item => {
      return item.replace("_", "").replace(" ", "").replace("-", "")
    }
  )
  let lowered = cleaned.map(item => item.toLowerCase());
  return lowered.join("-")
}

console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))