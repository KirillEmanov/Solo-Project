const { editForm } = document.forms;

editForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const { formid } = event.target.dataset;
  console.log("🚀🚀🚀🚀🚀 ~ formid:", formid)
  
  try {
    await fetch(`/profile/edit.shablon/${formid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
  } catch (error) {
    console.error(error);
  }
});

// const inputDiv = document.querySelector(".inputs")

// inputDiv.addEventListener('click', async (e) => {
   
//     if(e.target.tagName === 'INPUT') {
//         // e.target.checked = 1
//         console.log(e.target.name)
//     }
// })