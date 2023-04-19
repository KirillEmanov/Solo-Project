const React = require('react');
const Layout = require('./Layout');

module.exports = function MyList({ userSession }) {
  // const { user } = userSession;
  return (
    <Layout userSession={userSession}>
      <div className="listContainer">
        <h1>Мои листки адаптации</h1>
      </div>
    </Layout>
  );
};
