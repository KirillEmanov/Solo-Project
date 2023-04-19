const selectElements = document.querySelectorAll('.usersContainer');

// добавляем обработчик событий для каждого select элемента
selectElements.forEach((selectElement) => {
  selectElement.addEventListener('change', async (event) => {
    const { value } = event.target; // получаем значение, выбранное пользователем

    // отправляем данные на сервер
    try {
      const response = await fetch('/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: event.target.parentNode.firstChild.textContent,
          role: value,
        }),
      });
      const updatedUser = await response.json(); // получаем обновленную запись из ответа сервера

      // обновляем элемент списка
      const userListItems = document.querySelectorAll('.usersContainer li');

      userListItems.forEach((userListItem) => {
        const userName = userListItem.querySelector('.name').textContent;
        if (userName === updatedUser.name) {
          userListItem.querySelector('.role').textContent = updatedUser.role
            ? 'Администратор'
            : 'Пользователь';
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
});
