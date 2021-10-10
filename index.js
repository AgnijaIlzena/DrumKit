//document.querySelector("button").addEventListener("click", handleClick);

const buttons = document.querySelectorAll("button")
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener("click", handleClick);
})


// for (let i = 0; i<document.querySelectorAll(".drum").length; i++) {

// document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// }

function handleClick() {
    let audio = new Audio("sounds/crash.mp3");
    audio.play();
}

