const React = require('react');

module.exports = function Navbar({ userSession }) {
 
  return (
    <nav className="navigation">
      {userSession.user ? (
        <>
          <a href="/alllists" className="nav-link">
            Все листки адаптации
          </a>
          <a href="/mylists" className="nav-link">
            Мои листки адаптации
          </a>
          {userSession.role ? (
            <>
              <a href="/users" className="nav-link">
                Пользователи
              </a>
            </>
          ) : null}
          <a href="/logout" className="nav-link">
            Выйти
          </a>
        </>
      ) : (
        <>
          <img className="logo" logo="mountain"></img>
          <a href="/login" className="nav-link">
            Авторизация
          </a>
          <a href="/registration" className="nav-link">
            Регистрация
          </a>
        </>
      )}
    </nav>
  );
};
