import { createBrowserRouter, RouterProvider, useRouteError } from "react-router";

const Error = ()=>{

    const err = useRouteError();

    return (
        <>
            <p>Error page</p>
            <p>error: {err.status} | {err.statusText}</p>
        </>
    )
}

export default Error;