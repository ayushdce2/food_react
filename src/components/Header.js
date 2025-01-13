import {LOGO_URL} from "../utils/Constants";
import {useState} from "react";
import { NavLink } from "react-router";

const Header = ()=>{
    
    const [btnNameReact, setbtnNameReact] = useState("Login");

    return(
        <>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}/> 

                </div>
                <div className="nav-items">
                    <ul>
                        <li><NavLink  to="/food_react">HOME</NavLink ></li>
                        <li><NavLink  to="/about">About Us</NavLink ></li>
                        <li><NavLink  to="/contact">Contact Us</NavLink></li>
                        <li><NavLink  to="/cart">Cart</NavLink ></li>
                        <button className="login" onClick={()=>{btnNameReact === "Login"? setbtnNameReact("Logout") : setbtnNameReact("Login")}}>{btnNameReact}</button>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Header;