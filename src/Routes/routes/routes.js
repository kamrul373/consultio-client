import Main from "../../Layout/Main";

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
            }
        ]
    }
]);