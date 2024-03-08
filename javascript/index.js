
const innerDiv = document.querySelector(".inner-div");
const list = document.querySelector(".list");
const calculation = document.querySelector(".calulation");


list.childNodes.forEach((element) => {
    element.addEventListener("click", (event) => {
        console.log(event.target.className)
        localStorage.setItem("oparation",event.target.className)
        location.href = "level.html"
    })
})

