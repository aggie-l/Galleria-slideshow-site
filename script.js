const openBtn = document.querySelector(".open-img-btn")
const closeBtn = document.querySelector(".close-img-btn")
const modal = document.querySelector(".modal")

openBtn.addEventListener("click", () => {
    modal.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})