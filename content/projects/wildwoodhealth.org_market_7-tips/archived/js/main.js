document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    e.target.classList.add("loading")
    const inputs = e.target.querySelectorAll("input")

    let form = new FormData()
    inputs.forEach(input => {
        input.setAttribute("disabled", true)

        if (input.getAttribute("name")) {
            form.append(input.name, input.value)
        }
    })

    fetch("post.php", {
            method: "POST",
            body: form
        })
        .then(r => r.json())
        .then(r => r == true ? success() : error(r, inputs))
        .catch(e => error(e, inputs))

    return false
})

function success() {
    document.querySelector("#form_message").innerText = "Thank you for your submission!"
    document.querySelector("form").classList.add("hide")

    fbq('track', 'Lead');
}

function error(error, inputs) {
    inputs.forEach(input => input.setAttribute("disabled", false))
    document.querySelector("#form_message").innerText = "There was an error submitting your request. Please try again later."
    console.error(error)
}

document.querySelector(".button").addEventListener("click", e => {
    e.preventDefault()
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
    })
    return false
})