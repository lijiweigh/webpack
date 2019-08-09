function debounce(fn, timeout=100, immediate=false) {
    let timer = null

    return function() {
        let args = [...arguments]
        if (immediate) {
            fn.apply(this, args)
            immediate = false
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, timeout);
    }
}

function throttle(fn, timeout=100, immediate=false) {
    let timer = null
    let firstRun = immediate

    return function() {
        let args = [...arguments]
        if (!timer) {
            if (firstRun) {
                fn.apply(this, args);
                firstRun = false
            }

            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, timeout);
        }
    }
}