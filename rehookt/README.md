# <img id="rehookt-logo" src="https://raw.githubusercontent.com/ManuUseGitHub/Rehookt/master/rehookt_logo.svg"> <br/>[![npm version](https://badge.fury.io/js/rehookt.svg)](https://badge.fury.io/js/rehookt) [![Build Status](https://travis-ci.com/ManuUseGitHub/Rehookt.svg?branch=master)](https://travis-ci.com/ManuUseGitHub/Rehookt) [![Coverage Status](https://coveralls.io/repos/github/ManuUseGitHub/Rehookt/badge.svg?branch=master)](https://coveralls.io/github/ManuUseGitHub/Rehookt?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-61dafb.svg)](https://github.com/ManuUseGitHub/Rehookt/blob/master/LICENSE)

## Getting started

1. Install the package into your <b>react js</b> project.
    ```bash
    $ npm i rehookt
    ```
1. Then in any component, just require and call `useStates` :
    ```jsx
    // --- Parent component ---

    const ChildComponent = require( "../bar/foo/ChildComponentFolder1" );
    const ChildComponent = require( "../bar/foo/ChildComponentFolder2" );
    const ChildComponent = require( "../bar/foo/ChildComponentFolderN" );

    const { useStates, generate } = require( "rehookt" );

    module.exports = () => {

        // Generate hooks.

        const hooks = useStates( "first", "second", "third", "fourth", /*...*/ );

        // Pass the hooks object to children
    
        return (<div>
            <ChildComponent1 hooks={hooks} />
            <ChildComponent2 hooks={hooks} />
            ...
            ...
            <ChildComponentN hooks={hooks} />
        </div>)
    }
    ```
1. In any child component, use hooks as if every hook is defined by a `set method` and a `get property` :
    ```jsx
    // --- Any child component ---

    const GrandChildComponent = require( "../bar/baz/GrandChildComponentFolder" );
    
    module.exports = ( hooks ) {

        const { first, second, third, fourth, /*...*/ } = hooks;

        // printing the 'first' state or hook value
        console.log(first.val);

        // set the second state 
        const TWO = 8/4;
        third.set(TWO);

        // manage the 'third' state in a custom function
        bar.foo(third);

        return (<GrandChildComponent hooks={hooks} />)
    }
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

## Code 
Visit the github test repository page [Here](https://github.com/ManuUseGitHub/Rehookt/blob/master/rehookt/index.js).