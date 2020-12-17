# <img id="rehookt-logo" src="https://raw.githubusercontent.com/ManuUseGitHub/Rehookt/master/rehookt_logo.svg"> 

---

**Badges :**
[![npm version](https://badge.fury.io/js/rehookt.svg)](https://badge.fury.io/js/rehookt) [![Build Status](https://travis-ci.com/ManuUseGitHub/Rehookt.svg?branch=master)](https://travis-ci.com/ManuUseGitHub/Rehookt) [![Coverage Status](https://coveralls.io/repos/github/ManuUseGitHub/Rehookt/badge.svg?branch=master)](https://coveralls.io/github/ManuUseGitHub/Rehookt?branch=master) [![License: MIT](https://img.shields.io/badge/-MIT-61dafb.svg?logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wICg0MDM1YTRmYjQ5LCAyMDIwLTA1LTAxKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iYmFsYW5jZS5zdmciCiAgIGlkPSJzdmc0IgogICBhcmlhLWhpZGRlbj0idHJ1ZSIKICAgd2lkdGg9IjE2IgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAxNiAxNiIKICAgaGVpZ2h0PSIxNiIKICAgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1sYXcgbXItMiI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTAiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpbmtzY2FwZTpzbmFwLXBhZ2U9InRydWUiCiAgICAgaW5rc2NhcGU6YmJveC1ub2Rlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLWJib3gtZWRnZS1taWRwb2ludHM9InRydWUiCiAgICAgaW5rc2NhcGU6c25hcC1iYm94LW1pZHBvaW50cz0iZmFsc2UiCiAgICAgaW5rc2NhcGU6c25hcC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjM4MDgiCiAgICAgaW5rc2NhcGU6Y3k9IjI2LjcyNDk5MSIKICAgICBpbmtzY2FwZTpjeD0iLTEuODY3NjcwNyIKICAgICBpbmtzY2FwZTp6b29tPSIxMy45MDYyNSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaWQ9Im5hbWVkdmlldzYiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA1NyIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgLz4KICA8cGF0aAogICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgICBkPSJtIDguNzUwMDk0MywwLjc1IGEgMC43NSwwLjc1IDAgMCAwIC0xLjUsMCBWIDIgSCA2LjI2NjA5NDYgYyAtMC4zMDUsMCAtMC42MDQsMC4wOCAtMC44NjksMC4yMyBsIC0xLjI4OCwwLjczNyBBIDAuMjUsMC4yNSAwIDAgMSAzLjk4NDA5NDYsMyBoIC0yLjIzNCBhIDAuNzUsMC43NSAwIDAgMCAwLDEuNDk5OTk5NiBoIDAuNDI4IGwgLTIuMTExOTk5OTcsNC42OTIgYSAwLjc1LDAuNzUgMCAwIDAgMC4xNTQsMC44Mzc5OTk0IGwgMC41MywtMC41Mjk5OTk0IC0wLjUzLDAuNTI5OTk5NCB2IDEwZS00IGwgMC4wMDIsMC4wMDIgMC4wMDIsMC4wMDIgMC4wMDYsMC4wMDYgMC4wMTYsMC4wMTUgMC4wNDUsMC4wNCBhIDMuNTE0LDMuNTE0IDAgMCAwIDAuNjg2LDAuNDUgNC40OTIsNC40OTIgMCAwIDAgMi4wMjI5OTk5NywwLjQ1NCBjIDAuODgsMCAxLjU1NiwtMC4yMiAyLjAyMywtMC40NTQgYSAzLjUxNSwzLjUxNSAwIDAgMCAwLjY4NiwtMC40NSBsIDAuMDQ1LC0wLjA0IDAuMDE2LC0wLjAxNSAwLjAwNiwtMC4wMDYgMC4wMDIsLTAuMDAyIDEwZS00LC0wLjAwMiAtMC41MjksLTAuNTMwOTk5NCAwLjUzLDAuNTI5OTk5NCBhIDAuNzUsMC43NSAwIDAgMCAwLjE1NCwtMC44Mzc5OTk0IGwgLTIuMTEyLC00LjY5MiBoIDAuMTYyIGMgMC4zMDUsMCAwLjYwNCwtMC4wOCAwLjg2OSwtMC4yMyBsIDEuMjg5LC0wLjczNyBhIDAuMjUsMC4yNSAwIDAgMSAwLjEyNCwtMC4wMzMgSCA3LjI1MDA5NDMgViAxMi45OTk5OTggSCA0Ljc1MDA5NDYgYSAwLjc1LDAuNzUgMCAwIDAgMCwxLjUgaCA2LjQ5OTk5OTQgYSAwLjc1LDAuNzUgMCAwIDAgMCwtMS41IEggOC43NTAwOTQzIFYgMy41IGggMC45ODQgYSAwLjI1LDAuMjUgMCAwIDEgMC4xMjQsMC4wMzMgbCAxLjI4OTk5OTcsMC43MzYgYyAwLjI2NCwwLjE1MiAwLjU2MywwLjIzMSAwLjg2OCwwLjIzMSBoIDAuMTYyIGwgLTIuMTEyLDQuNjkyIGEgMC43NSwwLjc1IDAgMCAwIDAuMTU0LDAuODM3OTk5IGwgMC41MywtMC41Mjk5OTkgLTAuNTMsMC41Mjk5OTkgdiAxMGUtNCBsIDAuMDAyLDAuMDAyIDAuMDAyLDAuMDAyIDAuMDA2LDAuMDA2IDAuMDE2LDAuMDE1IDAuMDQ1LDAuMDQgYSAzLjUxNywzLjUxNyAwIDAgMCAwLjY4NiwwLjQ1IDQuNDkyLDQuNDkyIDAgMCAwIDIuMDIzLDAuNDU0IGMgMC44OCwwIDEuNTU2LC0wLjIyIDIuMDIzLC0wLjQ1NCBhIDMuNTEyLDMuNTEyIDAgMCAwIDAuNjg2LC0wLjQ1IGwgMC4wNDUsLTAuMDQgMC4wMSwtMC4wMSAwLjAwNiwtMC4wMDUgMC4wMDYsLTAuMDA2IDAuMDAyLC0wLjAwMiAwLjAwMSwtMC4wMDIgLTAuNTI5LC0wLjUzMDk5OSAwLjUzLDAuNTI5OTk5IGEgMC43NSwwLjc1IDAgMCAwIDAuMTU0LC0wLjgzNzk5OSBsIC0yLjExMSwtNC42OTIgaCAwLjQyNyBhIDAuNzUsMC43NSAwIDAgMCAwLC0xLjQ5OTk5OTYgaCAtMi4yMzQgYSAwLjI1LDAuMjUgMCAwIDEgLTAuMTI0LC0wLjAzMyBsIC0xLjI5LC0wLjczNiBhIDEuNzUsMS43NSAwIDAgMCAtMC44NjY5OTk4LC0wLjIzMSBoIC0wLjk4NSB6IE0gMS42OTUwOTQ2LDkuMjI2OTk5NiBjIDAuMjg1LDAuMTM1IDAuNzE4LDAuMjczIDEuMzA1LDAuMjczIDAuNTg3LDAgMS4wMiwtMC4xMzggMS4zMDUsLTAuMjczIGwgLTEuMzA1LC0yLjkgeiBtIDkuOTk5OTk5NCwwIGMgMC4yODUsMC4xMzUgMC43MTgsMC4yNzMgMS4zMDUsMC4yNzMgMC41ODcsMCAxLjAyLC0wLjEzOCAxLjMwNSwtMC4yNzMgbCAtMS4zMDUsLTIuOSB6IgogICAgIGlkPSJwYXRoMiIKICAgICBzdHlsZT0iZmlsbDojMDAwMDAwIiAvPgo8L3N2Zz4K)](https://opensource.org/licenses/MIT)

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