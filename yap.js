let ulDom = document.querySelector("#list")
let inputDom = document.querySelector("#task")

ulDom.addEventListener("click", function(e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked")
  }
  
  else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove()
  }
})

function newElement () {
    newli = document.createElement("li")
    newli.innerHTML = inputDom.value
    ulDom.appendChild(newli)

    span = document.createElement("span") 
    span.innerHTML = "x"
    span.classList.add("carpi")
    newli.appendChild(span)
}