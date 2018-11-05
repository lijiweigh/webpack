function hello () {
    const el = document.createElement("div")

    el.innerHTML = "hello webpack"

    document.body.appendChild(el)
}

hello()