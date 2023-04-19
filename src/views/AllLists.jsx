const React = require('react');
const Layout = require('./Layout');

module.exports = function AllList({ userSession }) {
  // const { user } = userSession;
  return (
    <Layout userSession={userSession}>
      <div className="ListContainer">
        <h1>Все листки адаптации</h1>
      </div>
    </Layout>
  );
};
