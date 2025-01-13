import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = ()=>{
    return(
        <>
            <div className="app">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },{
                path: "/food_react",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ],
        errorElement: <Error/>
    }
    
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRouter}/>);