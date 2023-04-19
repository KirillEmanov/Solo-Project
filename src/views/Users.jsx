const React = require('react');
const Layout = require('./Layout');

module.exports = function Users({ userSession }) {
  // const { user } = userSession;
  return (
    <Layout userSession={userSession}>
      <div className="usersContainer">
        <h1>Пользователи</h1>
      </div>
    </Layout>
  );
};
