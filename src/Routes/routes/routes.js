import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import ServiceDetails from "../../Pages/Shared/ServiceDetails/ServiceDetails";

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
            }
        ]
    }
]);