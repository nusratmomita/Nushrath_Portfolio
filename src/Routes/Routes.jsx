import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import JatriDetails from "../Components/Projects/ProjectsDetails/JatriDetails";
import TechGigs from "../Components/Projects/ProjectsDetails/TechGigs";
import AroggoDetails from "../Components/Projects/ProjectsDetails/AroggoDetails";

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
                path: "/AroggoDetails",
                Component: AroggoDetails
            }
        ]
    }
])