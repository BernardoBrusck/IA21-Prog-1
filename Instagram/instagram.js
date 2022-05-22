const domMain =  document.querySelector("main")
const domDivNum = document.querySelector ("main div:last-child")
const domDivNum = domMain.querySelector("h1")
var	counter = 0
domMain.addEventListener("click", () => {
	counter++
	domDivNum.innerHTML = counter
})
