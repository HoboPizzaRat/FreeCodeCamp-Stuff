let modal = document.querySelector(".lightbox");
let closeBtn = document.getElementById("close-btn");
let images = document.querySelectorAll(".gallery-item"); 
let modalImage = document.getElementById("lightbox-image");

function showImage(img){
  modal.style.display = "flex";
  let source = img.src;
  modalImage.src = source.replace("-thumbnail", "");
}
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
})
modal.addEventListener("click", () => {
  modal.style.display = "none";
})
images.forEach((img) => {
  img.addEventListener("click", () => showImage(img))
});