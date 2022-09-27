

let circle = document.getElementById("circle")
let text = document.getElementById("text")


function changeColorToGray() {
    circle.style.background = "gray"
}

function changeColorToBlue() {
    circle.style.background = "blue"
}



function changeTextOnHover() {
    text.innerHTML = "You are in the circle"

}

function changeTextOnMouseOut() {
    text.innerHTML = "You are outside of the circle"
}


circle.addEventListener("click", changeColorToGray);


circle.addEventListener("dblclick", changeColorToBlue);

circle.addEventListener("mouseover", changeTextOnHover)

circle.addEventListener("mouseout", changeTextOnMouseOut)










