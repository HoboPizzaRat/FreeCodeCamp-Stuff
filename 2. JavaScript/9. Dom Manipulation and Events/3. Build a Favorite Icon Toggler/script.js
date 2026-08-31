
function toggleIcon(icon){
  console.log("this occurs")
  if(icon.classList.contains("filled")){
    icon.classList.remove("filled");
    icon.innerHTML = "&#9825;";
    console.log("toggling on");
  }else{
    icon.classList.add("filled");
    icon.innerHTML = "&#10084;"
    console.log("toggling off")

  }
}

let icons = document.querySelectorAll(".favorite-icon");

icons.forEach((icon) => icon.addEventListener("click", () => toggleIcon(icon)));

