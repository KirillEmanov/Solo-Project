const React = require('react');
const Layout = require('./Layout');

module.exports = function Users({ userSession, userList }) {
  return (
    <Layout userSession={userSession}>
      <script defer src="js/users.js" />
      <div className="usersContainer">
        <h1>Пользователи</h1>
        <button className="addUserButton">Добавить нового пользователя</button>
        <ul id="userList">
          {userList.map((user) => (
            <li key={user.id} data-user-id={user.id}>
              <span className='name'>{user.name}</span> - <span className='role'>{user.role ? 'Администратор' : 'Пользователь'}</span>
              <select defaultValue={user.role ? 'true' : 'false'}>
                <option value="false">Пользователь</option>
                <option value="true">Администратор</option>
              </select>
              <button id={user.id} className="resetPasswordButton">Переназначить пароль</button>
              <button className="deleteUserButton">Удалить пользователя</button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
