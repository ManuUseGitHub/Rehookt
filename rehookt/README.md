# <img id="rehookt-logo" src="https://raw.githubusercontent.com/ManuUseGitHub/Rehookt/master/rehookt_logo.svg"> <br/>[![npm version](https://badge.fury.io/js/rehookt.svg)](https://badge.fury.io/js/rehookt) [![Build Status](https://travis-ci.com/ManuUseGitHub/Rehookt.svg?branch=master)](https://travis-ci.com/ManuUseGitHub/Rehookt) [![Coverage Status](https://coveralls.io/repos/github/ManuUseGitHub/Rehookt/badge.svg?branch=master)](https://coveralls.io/github/ManuUseGitHub/Rehookt?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-61dafb.svg)](https://opensource.org/licenses/MIT)

## Getting started

1. Install the package into your <b>react js</b> project.
    ```bash
    $ npm i rehookt
    ```
1. Then in any component, just require and call generate :
    ```jsx
    // Import the package.

    const { useStates, generate } = require("rehookt");

    // ...


    // Generate hooks in one object.

    const hooks = useStates( "first", "second", "third", "fourth", /*...*/ );
    ```

## Define with a value
You can associate a value to the hook by three ways.
1. Dont provide any value, but just the name of the hook. It will set the value to `undefined` by default.
    ```jsx
    useStates( "first", /*...*/ );
    ```
1. Provide a 2-cells-array with the name, then the value.
    ```jsx
    useStates( ["first",1], /*...*/ );
    ```
1. Provide an object.
    ```jsx
    useStates( {name:"first", value:1}, /*...*/ );
    ```

## Usage
To set the value of the hook, use the `set function` of the hook.
```jsx
const person = { name : "John doe", height : 1.80 };

hooks.person.set(person);
```

To get the value of the hook, use the `val field` of the hook.
```jsx
const JohnDoe = hooks.person.val;

console.log( `${JohnDoe.name} is ${JohnDoe.height} tall.` );
```

## Comparison
### Old way

Maybe you are used to create hooks and pass every mutator and getter into child components like this?
```jsx
// --- Parent component ---


// Creating hooks one by one.

const [ getPerson, setPerson ]   = useState( { name : "John doe", height : 1.80 } );
const [ getAddress, setAddress ] = useState( { city : "NewYork", zip : 10111, /*...*/ } );
const [ getJob, setJob ]         = useState( { name : "Fullstack dev" } );
const [ getComment, setComment ] = useState( null );


// Quite a horrible method of passing hooks in the ChildComponent ...

return (
<ChildComponent 
    getPerson={getPerson} setPerson={setPerson} 
    getAddress={getAddress} setAddress={setAddress} 
    getJob={getJob} setJob={setJob} 
    getComment={getComment} setComment={setComment} 
/> );
```

Here is a way of passing hooks in a child component. This one inspired me ... because you don't repeat yourself as much once you are in child components. All hooks are passed in one shot.
```jsx
// --- Parent component ---


// Creating hooks one by one.
// ...


// Quite ok method of passing hooks in the ChildComponent ...

const hooks { 
    person :    { val : getPerson, set : setPerson },
    address :   { val : getAddress, set : setAddress },
    job :       { val : getJob, set : setJob },
    comment :   { val : getComment, set : setComment }
}

return ( <ChildComponent hooks={hooks}/> );
```

### Using Rehookt
```jsx
// --- Parent component ---


// Creating hooks one by one in one go.
// rehookt is using React.useState under the hood.

const hooks = useStates(
    ["person",  { name : "John doe", height : 1.80 }],
    ["address", { city : "NewYork", zip : 10111, /*...*/ }],
    ["job",     { name : "Fullstack dev" }],
    "comment"   //default value : undefined
);

return ( <ChildComponent hooks={hooks}/> );
```

### code 
Visit the github test repository page to [Here](https://github.com/ManuUseGitHub/Rehookt/tree/master/rehookt).