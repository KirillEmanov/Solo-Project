const React = require('react');
const Layout = require('./Layout');


module.exports = function Main({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <div className="container">
        {/* <img src="/images/mountain.png" alt="Высокая гора" className="logo" /> */}
        <p className="message">
          Привет! Это корпоративный портал ООО “Высокая Гора”. Чтобы получить
          доступ к сайту - обратись в департамент HR.
        </p>
      </div>
    </Layout>
  );
};
