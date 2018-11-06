import show from "./print.js"

function hello () {
    const el = document.createElement("div")
    el.innerHTML = "hello webpack"

    const button = document.createElement("button")
    button.innerHTML = "click to show"
    button.onclick = show

    document.body.appendChild(el)
    document.body.appendChild(button)
}

hello()