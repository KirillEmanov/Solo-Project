const { backtoall } = document.forms
const div = document.querySelector(".BackBtn")

div.addEventListener("click", async (e) => {
    e.preventDefault()
    // const data = new FormData(ol)
    if(e.target.classList.contains("BackBtn")){
        console.log("button pressed")
        window.location.href = `/alllists/`
    }
})