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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-2DgUY4q0-8V4K5LHgNWNgE5ujwRZvtp2A&usqp=CAU"
          alt="jjjj"
        />
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

// const RestaurantCard = (props) => {
//     const { resData } = props;
//     return (
//       <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//         <img
//           className="res-logo"
//           src={
//               "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId
//               }/>
//               this is not a good way to write..we have destructure it..
//         <h3>{resData.info.name}</h3>
//         <h5>{resData.info.cuisines.join(' , ')}</h5>
//         <h5>{resData.info.avgRating}</h5>
//         <h5>{resData.info.costForTwo}</h5>
//         <h5>{resData.info.sla.deliveryTime}minutes</h5>
//       </div>
//     );
//   };
  // ************************************
const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} =resData?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId
              }/>
              
        <h3>{name}</h3>
        <h5>{cuisines.join(' , ')}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{resData.info.sla.deliveryTime}minutes</h5>
      </div>
    );
  };


const resList = [
                  {
                    "info": {
                      "id": "646505",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "57a56b68fa69d5fa79443df6d7444521",
                      "locality": "Maharani Laxmibai Marg",
                      "areaName": "Lashkar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.6,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "646505",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "4961",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "500+",
                      "promoted": true,
                      "adTrackingId": "cid=7784476~p=1~eid=00000189-c4df-0063-1315-5bff00ba0167~srvts=1691225096291~45995",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "1.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-06 00:50:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=646505",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "253987",
                      "name": "McDonald's",
                      "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
                      "locality": "DD City Mall",
                      "areaName": "Lashkar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "American"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "253987",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "630",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "1.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-06 00:15:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=253987",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "125828",
                      "name": "Atithi Inn",
                      "cloudinaryImageId": "rmib3vjuwx5nde1zs2ks",
                      "locality": "Ravi Nagar",
                      "areaName": "Shinde Ki Chhawani",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "North Indian"
                      ],
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "125828",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "37581",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 24,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=125828",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "707799",
                      "name": "Param Food Complex- Padav ",
                      "cloudinaryImageId": "68ce628c07ce2904b695ad69c422a0c2",
                      "locality": "Moti mahal road",
                      "areaName": "Padav ",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Snacks",
                        "Bakery"
                      ],
                      "avgRating": 4,
                      "feeDetails": {
                        "restaurantId": "707799",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "419919",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=707799",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "408363",
                      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                      "cloudinaryImageId": "wyl2r4wqmvlmfeezxzem",
                      "locality": "Patel Nagar",
                      "areaName": "City Center",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "408363",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "582",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "500+",
                      "promoted": true,
                      "adTrackingId": "cid=7822722~p=3~eid=00000189-c4df-0063-1315-5c0100ba030a~srvts=1691225096291~45995",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 21:33:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=408363",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "84911",
                      "name": "Jain Family Restaurant",
                      "cloudinaryImageId": "sc86aemjzooslj0ph11n",
                      "locality": "Railway Colony",
                      "areaName": "Thatipur",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "North Indian",
                        "Indian",
                        "Biryani"
                      ],
                      "avgRating": 3.3,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "84911",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "108872",
                      "avgRatingString": "3.3",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=84911",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "84545",
                      "name": "Masala Darbar - Lashkar",
                      "cloudinaryImageId": "gmen6ql7yxrg678gyxil",
                      "locality": "Lalitpur Colony",
                      "areaName": "Lashkar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Snacks",
                        "Punjabi",
                        "Tandoor",
                        "Biryani",
                        "Desserts",
                        "Thalis"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "84545",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "132992",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=84545",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "458042",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
                      "locality": "University Road",
                      "areaName": "City Center",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "feeDetails": {
                        "restaurantId": "458042",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2400
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2400
                      },
                      "parentId": "7918",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-06 00:50:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=458042",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "675899",
                      "name": "Burger Budds",
                      "cloudinaryImageId": "910b43a11f7d0051cba0a680eb73a689",
                      "locality": "Tansen Nagar",
                      "areaName": "Lashkar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burgers",
                        "Pizzas",
                        "Desserts",
                        "Chinese"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "675899",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "404177",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "50+",
                      "promoted": true,
                      "adTrackingId": "cid=7625443~p=4~eid=00000189-c4df-0063-1315-5c0200ba043b~srvts=1691225096291~45995",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-06 00:50:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=675899",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "123802",
                      "name": "Mayur Restaurant",
                      "cloudinaryImageId": "y2sdhs5je1cq5wnuhkot",
                      "locality": "Station Road",
                      "areaName": "Lashkar",
                      "costForTwo": "₹225 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Indian"
                      ],
                      "avgRating": 3,
                      "feeDetails": {
                        "restaurantId": "123802",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "628",
                      "avgRatingString": "3.0",
                      "totalRatingsString": "20+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=123802",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "458043",
                      "name": "The Biryani Life",
                      "cloudinaryImageId": "rcs6ktj03q4zymbv4joy",
                      "locality": "University Road",
                      "areaName": "City Center",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Mughlai",
                        "Lucknowi",
                        "Hyderabadi",
                        "Kebabs",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.9,
                      "feeDetails": {
                        "restaurantId": "458043",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2400
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2400
                      },
                      "parentId": "8496",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-06 00:50:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=458043",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "458045",
                      "name": "Shravan Specials by Lunchbox",
                      "cloudinaryImageId": "ulukm5zkoakkdwcaxhv7",
                      "locality": "University Road",
                      "areaName": "City Center",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "458045",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2400
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2400
                      },
                      "parentId": "21938",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "20+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-06 00:50:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=458045",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "91828",
                      "name": "Taste of Punjab",
                      "cloudinaryImageId": "qpnb6dlmdt2awtqlw3ef",
                      "locality": "University Marg",
                      "areaName": "Balwant Nagar",
                      "costForTwo": "₹225 for two",
                      "cuisines": [
                        "Indian",
                        "North Indian",
                        "Punjabi"
                      ],
                      "avgRating": 3.7,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "91828",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "6361",
                      "avgRatingString": "3.7",
                      "totalRatingsString": "5K+",
                      "promoted": true,
                      "adTrackingId": "cid=7625414~p=9~eid=00000189-c4df-0063-1315-5c0700ba0972~srvts=1691225096291~45995",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 23:50:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=91828",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "500912",
                      "name": "Burger Buddy- Phoolbagh",
                      "cloudinaryImageId": "xraly0ck3bnzttgisfqq",
                      "locality": "Phool Bagh",
                      "areaName": "Lashkar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "American",
                        "Fast Food",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "500912",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "51230",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=500912",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "84546",
                      "name": "Amritsari Naan",
                      "cloudinaryImageId": "i4j6fpbd4nn1u1rh4hvi",
                      "locality": "Lalitpur Colony",
                      "areaName": "Lashkar",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "North Indian",
                        "Punjabi",
                        "Thalis"
                      ],
                      "avgRating": 3.6,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "84546",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "32170",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 22:50:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=84546",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "92614",
                      "name": "Chawla Chicken",
                      "cloudinaryImageId": "xorieyykqsp7vfwatgel",
                      "locality": "Raksha Vihar",
                      "areaName": "City Center",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Indian",
                        "North Indian"
                      ],
                      "avgRating": 3.3,
                      "feeDetails": {
                        "restaurantId": "92614",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 1900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 1900
                      },
                      "parentId": "15269",
                      "avgRatingString": "3.3",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-05 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=92614",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  }
                ];

// const Body = () => {
//     return (
//       <div className="body">
//         <div className="search">Search</div>
//         <div className="res-container">
//          these are written here hard coded..we can loop these cards
//           <RestaurantCard resData={resList[0]} />
//           <RestaurantCard resData={resList[1]} />
//           <RestaurantCard resData={resList[2]} />
//           <RestaurantCard resData={resList[3]} />
//           <RestaurantCard resData={resList[4]} />
//           <RestaurantCard resData={resList[5]} />
//           <RestaurantCard resData={resList[6]} />
//           <RestaurantCard resData={resList[7]} />
//           <RestaurantCard resData={resList[8]} />
//           <RestaurantCard resData={resList[9]} />
//         </div>
//       </div>
//     );
//   };
//*************************** */
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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
