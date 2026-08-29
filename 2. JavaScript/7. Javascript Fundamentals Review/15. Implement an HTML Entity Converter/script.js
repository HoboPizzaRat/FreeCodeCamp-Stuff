function convertHTML(str){
  let html = "";
  for(let chr of str){
    if(chr == "&"){
      html += "&amp;";
    }else if(chr == "<"){
      html += "&lt;"
    }else if(chr == ">"){
      html += "&gt;"
    }else if(chr == '"'){
      html += "&quot;"
    }else if(chr == "'"){
      html += "&apos;"
    }else{
      html += chr;
    }
  }
  return html;
}
console.log(convertHTML("Dolce & Gabbana"));