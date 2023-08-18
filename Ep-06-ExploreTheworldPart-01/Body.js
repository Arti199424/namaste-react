import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
 import { useState,useEffect } from "react";

const Body = () => {
   const [listOfRestaurants,setListOfRestraunt] = useState([]);
  //  useEffect(()=>{
  //  console.log("useEffect Called");
  //  },[]);
  // console.log("body rendered"); it will call first then useeffect() rendered...
  useEffect(()=>{
    fetchData();
  },[]);
  fetchData= async ()=>{
    const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.216915&lng=78.170564&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" );

      const json=await data.json(); 
      console.log(json);
      //setListOfRestraunt(json.data.cards[5].card.card.gridElements.
      //The below thing is called Optional Chaining...
      setListOfRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  if(listOfRestaurants.length===0){
   return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} /> //this is called config driven ui..
        ))}
      </div>
    </div>
  );
};
export default Body;
