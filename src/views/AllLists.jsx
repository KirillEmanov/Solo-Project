const React = require('react');
const Layout = require('./Layout');

module.exports = function AllList({ userSession, Coopers }) {
  // const { user } = userSession;
  return (
    <Layout userSession={userSession}>
      <link rel="stylesheet" href="/css/progressbar.css" />
      <script src="/js/showlist.js" defer />
      <div className="ListContainer">
        <h1>Все листки адаптации</h1>
        <ol>
        {Coopers.map((el) => 
            <li>
              {`Сотрудник: ${el.employee}`}
              {" "}
              <div className='w3-light-grey w3-round-large' style={{ width: "200px"}}>
                <button className="w3-container w3-red w3-round progressBar" value={el.percent} style={{ width: `${el.percent}%`}}>{el.percent}%</button>
              </div>
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
