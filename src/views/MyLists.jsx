const React = require('react');
const Layout = require('./Layout');

module.exports = function MyLists({ userSession, MyCoopers }) {
  // const { user } = userSession;
  return (
    <Layout userSession={userSession}>
       <script src="/js/my.lists.js" defer />
      <div className="listContainer">
        <h1>Мои листки адаптации</h1>
        <ol>
        {MyCoopers.map((el) => 
            <li>
            {el.employee}
            {" "}
            <form name='ShowShablon'>
            <button className='ShowListBtn' id={el.id}>Посмотреть листок</button>
            </form>
            <form name='DeleteShablon'>
            <button className='DeleteListBtn' id={el.id}>Удалить листок</button>
            </form>
            </li>
          )}
        </ol>
      </div>
    </Layout>
  );
};

