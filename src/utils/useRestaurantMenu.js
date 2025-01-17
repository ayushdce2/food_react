import { useEffect, useState } from "react";

const useRestaurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState(null);

    

    const fetchData = async ()=>{
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.632986&lng=77.219374&restaurantId="+resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    return resInfo;
}

export default useRestaurantMenu;