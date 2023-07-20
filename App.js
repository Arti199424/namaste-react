// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World from React"
//   );

//   console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//-------------------------------------------------

// How to create nested elements in React

// <div id="parent">
//     <div id="child">
//     <h1>I aman h1 tag</h1>
//     </div>
// </div>

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   )
// );
// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//-------------------------------------------------------------------------

//To create one or more siblings inside div

/* <div id="parent">
  <div id="child">
    <h1>I am an h1 tag</h1>
    <h2>T am an h2 tag</h2>
  </div>
</div> */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ])
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//-------------------------------------------------------------------------

// To create one or more child inside parent

/* <div id="parent">
    <div id="child1">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
    <div id="child2">
        <h3>I am an h3 tag</h3>
        <h4>I am an h4 tag</h4>
    </div>
</div> */
const parent=React.createElement("div",{id:"parent"},[
   React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag"),
   ]),
   React.createElement("div",{id:"child2"},[
    React.createElement("h3",{},"I am an h3 tag"),
    React.createElement("h4",{},"I am an h4 tag"),
   ]),
]);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);