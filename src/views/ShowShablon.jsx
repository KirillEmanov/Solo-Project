const React = require('react');
const Layout = require('./Layout');
const ShablonForm = require('./ShablonForm');
module.exports = function ShowShablon({ CoopersShow, userSession, nameUser }) {
  return (
    <Layout userSession={userSession}>
      <script src="/js/backbtn.js" defer />
      <div>
        <div className="containerDiv">
          <ShablonForm el={CoopersShow} us={nameUser} />
        </div>
      </div>
    </Layout>
  );
};
