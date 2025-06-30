import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import JatriDetails from "../Components/Projects/ProjectsDetails/JatriDetails";
import TechGigs from "../Components/Projects/ProjectsDetails/TechGigs";
import CareenFind from "../Components/Projects/ProjectsDetails/CareenFind";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/jatriDetails",
                Component: JatriDetails
            },
            {
                path: '/TechGigsDetails',
                Component: TechGigs
            }
            ,
            {
                path: "/careerFind",
                Component: CareenFind
            }
        ]
    }
])