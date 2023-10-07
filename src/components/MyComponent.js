import React from "react";

function MyComponent (){
    const handleClick =() =>{
        alert('Hello, React!');
    }
    return <div><h1>First Component created</h1>
    <button onClick={handleClick}>Click me</button>
    </div>
}
export default MyComponent;