const inputUser = document.getElementById("markdown-input");
const rawInput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown(){
  const input = inputUser.value;
  let result = input.replace(/^# (.+)$/gm, "<h1>$1</h1>");
  result = result.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  result = result.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  result = result.replace(/^\*\*(.+)\*\*$/gm, "<strong>$1</strong>");
  result = result.replace(/\*\*(.+)\*\*/gm, "<strong>$1</strong>");
  result = result.replace(/^\_\_(.+)\_\_$/gm, "<strong>$1</strong>");
  result = result.replace(/\_\_(.+)\_\_/gm, "<strong>$1</strong>");
  result = result.replace(/^\*(.+)\*$/gm, "<em>$1</em>");
  result = result.replace(/\*(.+)\*/gm, "<em>$1</em>");
  result = result.replace(/^\_(.+)\_$/gm, "<em>$1</em>");
  result = result.replace(/^\!\[(.*)\]\((.*)\)$/gm, "<img alt='$1' src='$2'>");
  result = result.replace(/^\[(.*)\]\((.*)\)$/gm, "<a href='$2'>$1</a>");
  result = result.replace(/^\> (.+)$/gm, "<blockquote>$1</blockquote>");
  return result;
}

inputUser.addEventListener("input", () => {
  let converted = convertMarkdown();
  rawInput.textContent = converted;
  preview.innerHTML = converted;
})


