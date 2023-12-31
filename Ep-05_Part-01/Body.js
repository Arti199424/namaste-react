import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        
          {resList.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/> //this is called config driven ui..
          ))}
        </div>
      </div>
    );
  };
  export default Body;