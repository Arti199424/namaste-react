import React from "react";
import ReactDOM from "react-dom/client";

// React Element using JSX
//   const heading = <h1 id="heading" className="head" tableIndex="5">Namaste React Using JSX</h1>;
//  console.log(heading); 

//How do you put React Element inside a React element...
// const elem= <span>React Element......</span>
// const title= (
//     <h1 className="head">
//         {elem}
//         React Element inside React element....
//     </h1>
// );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(title);

//functional Component....
// const HeadingComponent = () =>{
//     return <h1>Namaste React Functional Component</h1>
// };   
// or you can write arrow functions as this way also..
// const HeadingComponent = () =>(
    //    <h1>Namaste React Functional Component</h1>
    // );
// const root = ReactDOM.createRoot(document.getElementById("root"));
 // root.render(heading);

// root.render(<HeadingComponent/>) //this is a  way to render all type of component......

//.......................................................................

//render one component into another known as*** Component Composition..

//you can also write functional Component like a Normal function as you can see below....
// const Title= function(){
// return (
//     <h1 className="head">Namaste React using JSX</h1>
// );
// };

// const Title=()=><h1 className="head">Namaste React Using JSX</h1>;
// const HeadingComponent=()=>(
//     <div id="container">
//     <Title/>
//     <Title></Title>
//     {Title()}
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);


//*********************************************** */
//you can also put/Render React Component inside React element.....

const Title=()=><h1 className="head">Namaste React Using JSX</h1>;
const HeadingComponent=()=>(
    <div id="container">
    <Title/>
    <Title></Title>
     {Title()}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
 );
const elem= <span>React Element......</span>
const title= (
    <h1 className="head">
        {elem}
        React Element inside React element....
        {<HeadingComponent></HeadingComponent>}
    </h1>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(title);