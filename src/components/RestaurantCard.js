import {CDN_URL} from "../utils/Constants";
const styleCard={
    backgroundColor:"grey"
}
const RestaurantCard = (props)=>{
    console.log(props.resData)
    const {cuisines, name, avgRating, slaString, costForTwo,cloudinaryImageId} = props.resData.info;
    return(
        <div className="res-card" style={styleCard}>
            <img alt="food"className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;