import "./style.css"
import img from "./1.jpg"

function Component () {
    let ele = document.createElement("div")

    ele.innerHTML = "hello webpack"

    let icon = new Image()
    icon.src = img

    document.body.appendChild(icon)

    return ele
}

document.body.appendChild(Component ())
console.log("hello")