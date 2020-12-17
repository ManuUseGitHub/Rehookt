# <img id="rehookt-logo" src="https://raw.githubusercontent.com/ManuUseGitHub/Rehookt/master/rehookt_logo.svg"> <br/>[![npm version](https://badge.fury.io/js/rehookt.svg)](https://badge.fury.io/js/rehookt) [![Build Status](https://travis-ci.com/ManuUseGitHub/Rehookt.svg?branch=master)](https://travis-ci.com/ManuUseGitHub/Rehookt) [![Coverage Status](https://coveralls.io/repos/github/ManuUseGitHub/Rehookt/badge.svg?branch=master)](https://coveralls.io/github/ManuUseGitHub/Rehookt?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-61dafb.svg)](https://github.com/ManuUseGitHub/Rehookt/blob/master/LICENSE)

## Getting started

1. Install the package into your <b>react js</b> project.
    ```bash
    $ npm i rehookt
    ```
1. Then in any component, just require and call generate :
    ```jsx
    // --- Parent component ---

    const { useStates, generate } = require("rehookt");


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

## Code 
Visit the github test repository page [Here](https://github.com/ManuUseGitHub/Rehookt/tree/master/rehookthttps://github.com/ManuUseGitHub/Rehookt/blob/master/rehookt/index.js).