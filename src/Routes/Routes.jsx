import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            }
        ]
    }
])