import {CDN_URL} from "../utils/Constants";

const RestaurantCard = (props)=>{
    // console.log(props.resData);
    const {cuisines, name, avgRating, slaString, costForTwo,cloudinaryImageId} = props.resData.info;
    return(
        <div className="">
            <img alt="food"className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="res_name">{name}</h3>
            <div className="rating_cost_wrap">
                <h4 className="res_cost">{costForTwo}</h4>
                <h4 className="res_rating">{avgRating}</h4>
                {/* <h4 className="res_cuisine">{slaString}</h4> */}
                
            </div>
            <h4 className="res_cuisine">{cuisines.join(" , ")}</h4>
            
        </div>
    )
}

export default RestaurantCard;