const rehookt = require("../rehookt");

function App(data) {

  const {hooks = {generated : {}}, definitions = []} = data;

  hooks.generated = rehookt.generate(...definitions);

  return ( <div className="App" /> );
}

export default App;
