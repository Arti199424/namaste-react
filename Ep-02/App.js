import React from 'react';
import ReactDOM from 'react-dom/client';

const parent=React.createElement("div",{id:"parent"},[
   React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"This is Namaste React"),
    React.createElement("h2",{},"Hello World I am here Arti...."),
   ]),
   React.createElement("div",{id:"child2"},[
    React.createElement("h3",{}," I am a frond End developer"),
    React.createElement("h4",{},"Now ,I am Learning React"),
   ]),
]);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);