import show from "./print.js"

import "./style.css"

function hello () {
    const el = document.createElement("div")
    // el.innerHTML = "hello webpack"
    el.innerHTML = navigator.userAgent + "\n(" + window.__wxjs_environment + ")"

    const button = document.createElement("button")
    button.innerHTML = "click to show"
    button.onclick = show

    document.body.appendChild(el)
    document.body.appendChild(button)
}

hello()
console.log(process.env.NODE_ENV)