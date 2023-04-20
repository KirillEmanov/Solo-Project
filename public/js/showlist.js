const { ShowShablon, BackFromShablon } = document.forms
const ol = document.querySelector("ol")
// if(e.target.classList.contains("ProgressBar")){
//     if(e.target.value <= 50){
//         ProgressBtn.style.backgroundColor = "red";
//     }
// }
const ProgressBars = document.querySelectorAll(".progressBar")
ProgressBars.forEach((el) => {{
    const percent = Number(el.value)
    if (percent < 50){
        el.style.backgroundColor = "rgb(241, 121, 51)";
    }else if (percent >= 50 && percent < 80){
        el.style.backgroundColor = "rgb(205, 219, 83)";
    }else{
        el.style.backgroundColor = "rgb(4, 113, 2)";
    }
}})

ol.addEventListener("click", async (e) => {
    e.preventDefault()
    // const data = new FormData(ol)
    if(e.target.classList.contains("ShowListBtn")){
        console.log("button pressed")
        window.location.href = `/alllists/${e.target.id}`
    }
})

