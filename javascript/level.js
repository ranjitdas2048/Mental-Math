const list = document.querySelector(".list")


list.childNodes.forEach((element) => {
    element.addEventListener("click", (event) => {
        console.log(event.target.className)
        localStorage.setItem("level",event.target.className)
        location.href = "calculation.html"
    })
})


