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
        // const result = await response.json()
          document.querySelectorAll('input').forEach((el) => el.value = '');
    } catch (error) {
        alert('ШАБЛОН НЕ СОЗДАЛСЯ', error)
    }
    
})
