import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body =()=>{

    const [listOfRestaurants,setListOfRestaurants] = useState(resObj);

    const Topratedrestaurants =()=>{

        const filteredList = resObj.filter((allData)=>{
            return allData.info.avgRating > 4.3;
        });
        setListOfRestaurants(filteredList);
        
    }
    return(
        <>
            <div className="body">
                <div className="filter">
                    <button className="filter-btn" onClick={Topratedrestaurants}>Top rated Restaurants</button>
                </div>
                <div className="res-container">
                {
                    listOfRestaurants.map((res, index)=>{
                        
                        
                        return (
                            <div key={index}>
                        <RestaurantCard resData={res} />
                        </div>)
                        
                    })
                }
                {/* <RestaurantCard resData ={resObj}/> */}
                
                </div>

            </div>
        </>
    )
}

export default Body;