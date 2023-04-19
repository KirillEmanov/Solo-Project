const React = require("react");
const Layout = require("./Layout");

module.exports = function Shablon({ userSession }) {
  return (
    <Layout userSession={userSession}>
      {/* <script defer src="js/registration.js" /> */}
      <form name="createShablon" method="POST" action='/shablon'>
      <div className="shablon"><br />
        <div className="greetings">
          Привет, <input type="text" className="form-shablon" name="employee"/> <br />
          И добро пожаловать в команду Высокогорья!
          <br />
          Впереди нас ждет интересное путешествие в мир нашей
          <br /> компании, и самым главным проводником будет- <input type="text" className="form-shablon" name="userId"/>
          <br />
          Мы подготовили для тебя чек-лист на первый день. Процесс
          <br />
          выполнения будет сохраняться, поэтому ты можешь закрывать пункты
          <br />в удобном для тебя порядке.
        </div>
        <div>
          <h4>Нужно подготовить твое рабочее место:</h4> 
          <div className="check">
            <input type="text" name="task1" /><div>Наставник выдал мне пропуск</div>
          </div>
          <div className="check">
            <input type="checkbox" name="task2" /><div>Наставник сообщил пароль от Wi-Fi</div>
          </div>
          <div className="check">
            <input type="checkbox" name="task3" /><div>Системный администратор выдал мне ноутбук</div>
          </div>
          <div className="check">
            <input type="checkbox" name="task4" /><div>Системный администратор выдал мне доступы к почте</div>
          </div>
          <div className="check">
            <input type="checkbox" name="task5" /><div>Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии</div>
          </div>
          <h4>Важно познакомиться с коллегами:</h4> 
          <div className="check">
            <input type="checkbox" name="task6" /><div>Ты познакомился (-ась) со своим руководителем</div>
          </div>
          <div className="check">
            <input type="checkbox" name="task7" /><div>Ты написал(-а) сообщение в командный чат</div>
          </div>
          <div className="check">
            <div>Напиши имена трех твоих коллег по отделу:</div><input type="text" className="form-shablon" name="task8" />
          </div>
          <h4>Важно пройти оформление в отделе кадров:</h4> 
          <div className="check">
            <input type="checkbox" name="task9" /><div>Ты отправил (-а) сканы документов на оформление в отдел кадров</div>
          </div>
          <div className="check">
            <input type="checkbox" name="task10" /><div>Ты подписал (-а) соглашение о коммерческой тайне</div>
          </div>
          <h4>А теперь самое время работать:</h4>
          <div className="check">
            <input type="checkbox" name="task11" /><div>Получи свою первую задачу у руководителя</div>
          </div>
          <div className="check">
            <input type="checkbox" name="task12" /><div>Создай подпись в почте по корпоративному шаблону</div>
          </div><br />
          Классного путешествия! <br /> Команда Высокой горы 💚
        </div><br />
        <button type="submit" className="createShablon">Создать шаблон</button>
      </div>
      </form>
    </Layout>
  );
};
