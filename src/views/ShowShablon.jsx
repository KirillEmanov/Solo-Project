const React = require('react');
const Layout = require("./Layout")
const ShabloForm = require("./ShablonForm")
module.exports = function ShowShablon({ CoopersShow, userSession }) {
  return (
    <Layout userSession={userSession}>
      <script src='/js/backbtn.js' defer />
        <div>
            <div className="containerDiv">   
                <ShabloForm el={CoopersShow}/>
            </div>
        </div>
    </Layout>
  )
}
