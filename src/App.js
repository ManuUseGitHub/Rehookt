
const React = require('react');
const { useStates, generate } = require("../rehookt");

module.exports = function App(data) {

  

  const {hooks = {generated : {}}, definitions = []} = data;

  hooks.generated = useStates(...definitions);

  return ( <div className="App" /> );
}