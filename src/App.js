const { useStates, generate } = require("../rehookt");

function App(data) {

  const {hooks = {generated : {}}, definitions = []} = data;

  hooks.generated = generate(...definitions);
  console.log(hooks)

  return ( <div className="App" /> );
}

export default App;
