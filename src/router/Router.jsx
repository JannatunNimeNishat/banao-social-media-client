import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import CreatePost from "../pages/CreatePost/CreatePost";
import Dashboard from "../layouts/Dashboard/Dashboard";
import GetAllPostByUser from "../pages/SocialPost/GetAllPostByUser/GetAllPostByUser";
import EditPost from "../pages/SocialPost/EditPost/EditPost";

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
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'createPost',
                element:<CreatePost></CreatePost>
            },
            {
                path:'allPost',
                element:<GetAllPostByUser></GetAllPostByUser>
            },
            {
                path:'editPost/:id',
                element:<EditPost></EditPost>
            }
        ]
    }
])

export default router