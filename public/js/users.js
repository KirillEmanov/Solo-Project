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

// обработчик события для кнопки "Добавить нового пользователя"
const addUserButton = document.querySelector('.addUserButton');
addUserButton.addEventListener('click', (event) => {
  // создаем модальное окно
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // создаем форму для добавления пользователя
  const form = document.createElement('form');
  form.classList.add('addUserForm');

  // добавляем поля для ввода имени и роли пользователя
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Имя пользователя');
  form.appendChild(nameInput);

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('placeholder', 'Email');
  form.appendChild(emailInput);

  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('name', 'password');
  passwordInput.setAttribute('placeholder', 'Пароль');
  form.appendChild(passwordInput);

  const roleInput = document.createElement('select');
  roleInput.setAttribute('name', 'role');
  const userOption = document.createElement('option');
  userOption.setAttribute('value', 'false');
  userOption.textContent = 'Пользователь';
  roleInput.appendChild(userOption);

  const adminOption = document.createElement('option');
  adminOption.setAttribute('value', 'true');
  adminOption.textContent = 'Администратор';
  roleInput.appendChild(adminOption);

  form.appendChild(roleInput);

  // добавляем кнопки "Добавить" и "Отмена"
  const addButton = document.createElement('button');
  addButton.setAttribute('type', 'submit');
  addButton.textContent = 'Добавить';
  form.appendChild(addButton);

  const cancelButton = document.createElement('button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.textContent = 'Отмена';
  cancelButton.addEventListener('click', () => {
    modal.remove();
  });
  form.appendChild(cancelButton);

  // добавляем форму в модальное окно
  modal.appendChild(form);

  // добавляем модальное окно на страницу
  const userList = document.querySelector('#userList');
  userList.parentNode.insertBefore(modal, userList);

  // обработчик события для отправки формы
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          password: formData.get('password'),
          role: formData.get('role') === 'true',
        }),
      });
      const newUser = await response.json();

      // закрываем модальное окно
      modal.remove();

      // обновляем список пользователей
      const userList = document.querySelector('.usersContainer ul');
      const newUserListItem = document.createElement('li');
      newUserListItem.innerHTML = `
      <span class="name">${newUser.name}</span> -
      <span class="role">${
        newUser.role ? 'Администратор' : 'Пользователь'
      }</span>
      <select defaultValue=${newUser.role ? 'true' : 'false'}>
        <option value="false">Пользователь</option>
        <option value="true">Администратор</option>
      </select>
    `;
      userList.appendChild(newUserListItem);

      // добавляем обработчик событий для нового select элемента
      const newSelectElement = newUserListItem.querySelector('select');
      newSelectElement.addEventListener('change', async (event) => {
        // отправляем данные на сервер
        try {
          const response = await fetch('/users', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: event.target.parentNode.firstChild.textContent,
              email: updatedUser.email,
              password: updatedUser.password,
              role: event.target.value === 'true',
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
              userListItem.querySelector('.email').textContent =
                updatedUser.email;
              userListItem.querySelector('.password').textContent =
                updatedUser.password;
            }
          });
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
});

const deleteUserButtons = document.querySelectorAll('.deleteUserButton');

deleteUserButtons.forEach((deleteUserButton) => {
  deleteUserButton.addEventListener('click', async (event) => {
    const userName = event.target.parentNode.querySelector('.name').textContent;

    try {
      const response = await fetch(`/users/${userName}`, {
        method: 'DELETE',
      });

      if (response.status === 204) {
        event.target.parentNode.remove();
      } else {
        console.log('Failed to delete user.');
      }
    } catch (error) {
      console.log(error);
    }
  });
});
