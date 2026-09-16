let h1Heading = /^#\s/g;
let h2Heading = /^##\s/;
let h3Heading = /^###\s/;
let boldRegex = /(?:\*\*|__).*?(?:\*\*|__)/g;
let italicRegex = /(?:\*|_).*?(?:\*|_)/g;
let imageRegex = /!\[(.*?)\]\((.*?)\)/;


let markdownInput = document.getElementById("markdown-input");
let htmlOutput = document.getElementById("html-output");
let htmlPreview = document.getElementById("preview");

function convertMarkdown(markdown){
  let output = "";
  for(let line of markdown.split("\n")){
    let line_processed = line;

    if(h1Heading.test(line)){
      line_processed = line_processed.replace(h1Heading, "<h1>") + "</h1>";
    }
    else if(h2Heading.test(line)){
      line_processed = line_processed.replace(h2Heading, "<h2>") + "</h2>";
    }
    else if(h3Heading.test(line)){
      line_processed = line_processed.replace(h3Heading, "<h3>") + "</h3>";
    }
    if(line_processed.match(boldRegex)){
      let match = line.match(boldRegex)[0].replaceAll("**", "")
      line_processed += line_processed.replaceAll(boldRegex, `<strong>${match}</strong>`);
    }
    let italic = line_processed.match(italicRegex);
    if(italic){
      let match = line_processed.match(italicRegex)[0].replaceAll("*", "")
      line_processed += line.replaceAll(italicRegex, `<em>${match}</em>`);
    }
    let image = line_processed.match(imageRegex);
    if(image){
      let altText = image[1];
      let href = image[2];
      line_processed += line.replace(imageRegex, `<img alt="${altText}" src="${href}">`)
      console.log(altText);
      console.log(href);
    }
    output += line_processed+"\n";
  }
  return output;
}

markdownInput.addEventListener("change", () => {
  let converted = convertMarkdown(markdownInput.value)
  htmlOutput.textContent = converted;
  htmlPreview.innerHTML = converted;
})


