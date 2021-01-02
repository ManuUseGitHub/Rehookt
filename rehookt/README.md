# <img id="rehookt-logo" src="https://raw.githubusercontent.com/ManuUseGitHub/Rehookt/master/rehookt_logo.svg"> <br/>[![npm version](https://badge.fury.io/js/rehookt.svg)](https://badge.fury.io/js/rehookt) [![Build Status](https://travis-ci.com/ManuUseGitHub/Rehookt.svg?branch=master)](https://travis-ci.com/ManuUseGitHub/Rehookt) [![Coverage Status](https://coveralls.io/repos/github/ManuUseGitHub/Rehookt/badge.svg?branch=master)](https://coveralls.io/github/ManuUseGitHub/Rehookt?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-61dafb.svg)](https://github.com/ManuUseGitHub/Rehookt/blob/master/LICENSE)

## Getting started

1. Install the package into your <b>react js</b> project.
    ```bash
    $ npm i rehookt
    ```
1. Then in any component, just require and call `useStates` :
    ```jsx
    // --- Parent component ---

    import ChildComponent1 from "../bar/foo/ChildComponentFolder1";
    import ChildComponent2 = from "../bar/foo/ChildComponentFolder2";
    import ChildComponentN = from "../bar/foo/ChildComponentFolderN";

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

    import GrandChildComponent from "../bar/baz/GrandChildComponentFolder";
    
    module.exports = ( hooks ) => {

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
    const hooks = useStates( "first", /*...*/ );
    ```
1. Provide a 2-cells-array with the name, then the value.
    ```jsx
    const hooks = useStates( ["first",1], /*...*/ );
    ```
1. Provide an object.
    ```jsx
    const hooks = useStates( {name:"first", value:1}, /*...*/ );
    ```
    
## Special hooks
1. **rehookt_none**
    If you wish to return an empty set of hooks, create the single Special hook identified by, `REHOOKT_NONE` or `rehookt_none`. The case is not sensitive. and the value is ignored.

    This is the only way to get an empty set... nothing given to useStates throws an exception
    ```jsx
    const hooks1 = useStates( "rehookt_none" );
    
    // OR an object with or without a value
    const hooks2 = useStates( { name : "rehookt_none", value : "data" }, );
    
    // OR an array with or without a value
    const hooks3 = useStates( ["rehookt_none", 'none'], );

    console.log( hooks1, hooks2, hooks3 )
    // Will output { } { } { }
    ```

## Github
1. **Code**
Visit the github test repository page [Here](https://github.com/ManuUseGitHub/Rehookt/blob/master/rehookt/index.js).

1. **Demo**
Here is an interactive [demo](https://github.com/ManuUseGitHub/Rehookt/tree/master/demo) to show you how Rehookt can be used to generate hooks **on the fly**.