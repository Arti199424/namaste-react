import React from "react";
import ReactDOM from "react-dom/client";

// Header
// --Logo
// --navitems
// body
// --search
// --Restaurant container
//   --Restaurant Card
//     --img
//     --Name of res,Star-Rating,Cuisines,delivery time etc.
// Footer
// --Copyright
// --links
// --Contact
// --Address
// Now we are using above things as a ReferenceError

// *****************************************************

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-2DgUY4q0-8V4K5LHgNWNgE5ujwRZvtp2A&usqp=CAU" alt="jjjj" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
//a way to write css inside jsx.....
const styleCard={backgroundColor:"#f0f0f0"};
const RestaurantCard=()=>{
    return (
        //<div className="res-card" style={styleCard}>now, there is one more way to write css inside jsx
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c583ca6ce40b426797a78ae2ac91f2ec" alt="" />
            <h3>Meghana Foods</h3>
            <h5>Biryani,North Indian,Asian</h5>
            <h5>4.4 Stars</h5>
            <h5>35 Minutes</h5>
        </div>
    );
};
const Body=()=>{
return (<div className="body">
    <div className="search">Search</div>
    <div className="res-container">
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>

   
    </div>
</div> );
};
const AppLayout = () => {
  return (<div classname="app">
    <Header/>
    <Body/>
 </div>);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
