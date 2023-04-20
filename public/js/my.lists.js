const { ShowShablon, BackFromShablon } = document.forms
const ol = document.querySelector("ol")

ol.addEventListener("click", async (e) => {
    e.preventDefault()
    // const data = new FormData(ol)
    if(e.target.classList.contains("ShowListBtn")){
        console.log("button pressed")
        window.location.href = `/mylists/${e.target.id}`
    }
})