import React from "react";
import ReactDOM from "react-dom/client";

// React Element using JSX
//   const heading = <h1 id="heading" className="head" tableIndex="5">Namaste React Using JSX</h1>;
//  console.log(heading); 

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

const Title=()=><h1 className="head">Namaste React Using JSX</h1>;
const HeadingComponent=()=>(
    <div id="container">
    <Title/>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);