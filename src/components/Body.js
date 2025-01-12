import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body =()=>{

    const [listOfRestaurants,setListOfRestaurants] = useState();

    const Topratedrestaurants =()=>{

        const filteredList = listOfRestaurants.filter((allData)=>{
            return allData.info.avgRating > 4.3;
        });
        setListOfRestaurants(filteredList);
        
    }
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.632986&lng=77.219374&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants == undefined ? (<Shimmer/>):(
        <>
            <div className="body">
                
                <div className="filter">
                    <button className="filter-btn" onClick={Topratedrestaurants}>Top rated Restaurants</button>
                </div>
                <div className="res-container">
                {
                    listOfRestaurants?.map((res, index)=>{
                        
                        
                        return (
                            <div key={index}>
                        <RestaurantCard resData={res} />
                        </div>)
                        
                    })
                }
                {/* <RestaurantCard resData ={resObj}/> */}
                
                </div>
                
                <div className="">
                    <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">CLICK to start API</a>
                </div>

            </div>
        </>
    )
}

export default Body;