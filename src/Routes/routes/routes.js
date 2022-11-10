import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Edit from "../../Pages/Edit/Edit";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Forgot from "../../Pages/SignIn/Forgot/Forgot";

import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Pages/Home/Home/Home");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: async () => fetch("http://localhost:5000/services/limited"),
                element: <Home></Home>
            },
            {
                path: "/home",
                loader: async () => fetch("http://localhost:5000/services/limited"),
                element: <Home></Home>
            },
            {
                path: "/services/:id",
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/services",
                loader: async () => fetch("http://localhost:5000/services/"),
                element: <AllServices></AllServices>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/myreviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "/edit/:id",
                loader: async ({ params }) => fetch(`http://localhost:5000/review/${params.id}`),
                element: <PrivateRoute><Edit></Edit></PrivateRoute>
            },
            {
                path: "/addservice",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/forgot",
                element: <Forgot></Forgot>
            }

        ]
    }
]);