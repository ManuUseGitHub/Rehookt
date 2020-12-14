const { useStates, generate } = require("../rehookt");

function App(data) {

  const {hooks = {generated : {}}, definitions = []} = data;

  hooks.generated = useStates(...definitions);

  return ( <div className="App" /> );
}

export default App;