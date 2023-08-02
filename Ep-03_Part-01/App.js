import React from 'react';
import ReactDOM from 'react-dom/client';
//React.createElement=>is basically an object=>when we render this to dom then it becomes the html element
const heading=React.createElement("h1",{id:"heading"},"Namaste React!!!");
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);