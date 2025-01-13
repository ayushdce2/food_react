import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router";

const RestaurantMenu = ()=>{
    
    const [resInfo, setResInfo]=useState(0);

    const {resId} = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async ()=>{

        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.632986&lng=77.219374&restaurantId="+resId);
        const json = await data.json();
        // console.log(json,"<----------");
        setResInfo(json);
    }


    if((resInfo===0)){
            return <Shimmer/>;
    }
console.log(   resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
const {name, avgRating, cloudinaryImageId, costForTwoMessage, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    return(
        <>
            <div className="rest_menu">
            <div>
                    <p>{name}</p>
                </div>
                <div>
                    <p>avgRating {avgRating}</p>
                </div>
                <div>
                    <p>cloudinaryImageId {cloudinaryImageId}</p>
                </div>
                <div>
                    <p>costForTwoMessage {costForTwoMessage}</p>
                </div>
                <div>
                    <p>{cuisines.join(", ")}</p>
                </div>
                <div>
                    {/* <p>{costForTwoMessage}</p> */}
                </div>
                <p>Dishes available-----</p>
                <ul>
                    {
                        itemCards.map((data, index)=>{
                            return <li key={index}>{index+1} - {data.card.info.name} - Rs. {data.card.info.price/100}</li>
                        })
                    }
                    {/* <li>{itemCards[0].card.info.name}</li>
                    <li>{itemCards[1].card.info.name}</li>
                    <li>{itemCards[2].card.info.name}</li> */}
                    
                </ul>

            </div>
        </>
    )
}

export default RestaurantMenu;