function Component () {
    let ele = document.createElement("div")

    ele.innerHTML = "hello webpack"

    return ele
}

document.body.appendChild(Component ())
console.log("hello")