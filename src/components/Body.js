import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import {Link} from "react-router";

const Body =()=>{

    const [listOfRestaurants,setListOfRestaurants] = useState();
    const [filteredRestaurants,setFilteredRestaurants] = useState();

    const [searchText, setSearchText] = useState("");

    const Topratedrestaurants =()=>{

        const filteredList = listOfRestaurants.filter((allData)=>{
            return allData.info.avgRating > 4.4;
        });
        setFilteredRestaurants(filteredList);
        
    }
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.632986&lng=77.219374&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants == undefined ? (<Shimmer/>):(
        <>
            <div className="body">

                
                
                <div className="filter">
                    <div className="all_filter_btn">
                        <button className="filter-btn" onClick={()=>{ setFilteredRestaurants(listOfRestaurants); }}>All Restaurants</button>

                        <button className="filter-btn" onClick={Topratedrestaurants}>Top rated Restaurants</button>
                    
                        
                    </div>

                    <div className="search">
                    
                        <input type="text" className="search-box" placeholder="Search for cuisines . . . ." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                        <button onClick={()=>{
                            console.log(searchText);
                            const filteredList = listOfRestaurants.filter((allData)=>{

                                return allData.info.cuisines.toString().toLowerCase().includes(searchText.toLowerCase());

                            });

                            console.log(filteredList);
                            setFilteredRestaurants(filteredList);
                            
                            }}>Search</button>

                    </div>

                </div>
                <div className="res-container">
                {
                    filteredRestaurants?.map((res, index)=>{
                        
                        
                        return (
                        <Link to={"/restaurants/"+res.info.id} key={res.info.id} className="res-card">
                            <RestaurantCard resData={res} />
                        </Link>
                        )
                        
                    })
                }
                {/* <RestaurantCard resData ={resObj}/> */}
                
                </div>
                
                

            </div>
        </>
    )
}

export default Body;