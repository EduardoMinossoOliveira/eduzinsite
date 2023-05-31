let modalGaleria = document.querySelector("div.modal-galeria")
let imgs = document.querySelectorAll("div.galeria-fotos img")
let fechar = document.querySelector("div.modal-galeria .fechar")

imgs.forEach(img => {
  img.onclick = function() {
    modalGaleria.classList.add("show")
  }
})
fechar.onclick = function() {
  modalGaleria.classList.remove("show")
}



// for (let i=0; i < imgs.length; i++) {
//   imgs[i].onclick = function() {
//     modalGaleria.classList.add("show")
//   }
// }

// let img = document.querySelector("div.galeria-fotos img")
// img.onclick = function() {
//   modalGaleria.classList.add("show")
// }