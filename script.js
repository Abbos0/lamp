const container = document.querySelector(".lamp-container")
const Light = document.querySelector(".light")
const maxValue = document.querySelector("#maxValue")
container.addEventListener("change",(e)=>{
    let rangeValue = e.target.value
    Light.style.opacity = rangeValue/10
    maxValue.innerHTML = rangeValue
})

var light = document.getElementById("light")
function toggle(){
    btn.classList.toggle("active")
    light.classList.toggle("on")
}

