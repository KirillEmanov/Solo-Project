const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ children, userSession }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Progress bar</title>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Navbar userSession={userSession} />
        <div id="backgroundContainer">{children}</div>
      </body>
    </html>
  );
};
