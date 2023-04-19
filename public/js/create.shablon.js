const { createShablon } = document.forms;

createShablon.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = new FormData(createShablon)

    console.log('HI Alex!')

    try {
        const response = await fetch('/shablon', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(data)),      
        });
        const result = await response.json()
        console.log("🚀🚀🚀🚀🚀 ~ result:", result)
        
          document.querySelectorAll('input').forEach((el) => el.value = '');
    } catch (error) {
        alert('ШАБЛОН НЕ СОЗДАЛСЯ', error)
    }
    
})


const inputDiv = document.querySelector(".inputs")

inputDiv.addEventListener('click', async (e) => {
   
    if(e.target.tagName === 'INPUT') {
        console.log(e.target.name)
    }
})

// ol.addEventListener("click", async (e) => {
//     e.preventDefault()
//     // const data = new FormData(ol)
//     if(e.target.classList.contains("ShowListBtn")){
//         console.log("button pressed")
//         window.location.href = `/alllists/${e.target.id}`
//     }
// })
// 
// ! Слушатель на родителя


// function check() {
//   document.getElementById("myCheck").checked = true;
// }

// function uncheck() {
//   document.getElementById("myCheck").checked = false;
// }


