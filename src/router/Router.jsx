import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UserDashBoard from "../pages/UserDashBoard/UserDashBoard";
import CreatePost from "../pages/CreatePost/CreatePost";
import Dashboard from "../layouts/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard/createPost',
                element:<CreatePost></CreatePost>
            }
        ]
    }
])

export default router