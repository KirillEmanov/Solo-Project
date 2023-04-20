const React = require('react');
const Layout = require('./Layout');

module.exports = function AllList({ userSession, Coopers }) {
  // const { user } = userSession;
  return (
    <Layout userSession={userSession}>
      <script src="/js/showlist.js" defer />
      <div className="ListContainer">
        <h1>Все листки адаптации</h1>
        <ol>
        {Coopers.map((el) => 
            <li>
            {`Сотрудник: ${el.employee}`}
            {" - "}
            {`Листок выполнен на: ${el.percent}%`}
            <form name='ShowShablon'>
            <button className='ShowListBtn' id={el.id}>Посмотреть листок</button>
            </form>
            </li>
          )}
        </ol>
      </div>
    </Layout>
  );
};
