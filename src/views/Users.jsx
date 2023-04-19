const React = require('react');
const Layout = require('./Layout');

module.exports = function Users({ userSession, userList }) {
  return (
    <Layout userSession={userSession}>
      <script defer src="js/users.js" />
      <div className="usersContainer">
        <h1>Пользователи</h1>
        <ul>
          {userList.map((user) => (
            <li key={user.name}>
              <span className='name'>{user.name}</span> - <span className='role'>{user.role ? 'Администратор' : 'Пользователь'}</span>
              <select defaultValue={user.role ? 'true' : 'false'}>
                <option value="false">Пользователь</option>
                <option value="true">Администратор</option>
              </select>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
