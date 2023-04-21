const { createShablon } = document.forms;

createShablon.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = new FormData(createShablon)

    try {
        const response = await fetch('/mylists/shablon', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(data)),      
        });
        const result = await response.json()
        console.log("🚀🚀🚀🚀🚀 ~ result:", result)
        
        //   document.querySelectorAll('input').forEach((el) => el.value = '');
          document.querySelectorAll('.form-shablon').forEach((el) => el.value = '');
    } catch (error) {
        alert('ШАБЛОН НЕ СОЗДАЛСЯ', error)
    }
    
})
