import { createBrowserRouter } from "react-router-dom";
import Login from '../Components/Auth/Login'
// import Home from '../Component s/Auth/Home'
import Register from '../Components/Auth/Register'
// import dashboard from "../Components/Dashboard/index";
import Layout from "../Components/Layout/Layout";

export const ROOT = "/"
export const LOGIN = "/login"
export const REGISTER = "/register"
export const PROTECTED = "/protected"
export const DASHBOARD = "/protected/dashboard"
export const TEST = "/protected/test"
export const SCORE = "/protected/score"


export const router = createBrowserRouter([
    {
        path: ROOT, element: "Public Route"
    },
    {
        path: LOGIN, element: <Login/>
    },
    {
        path: REGISTER, element: <Register/>
    },
    {
        path: PROTECTED, element: <Layout/>, children: [
            //here comes the list of the routes or teh components that needs to be protected, in object form.
            {path: DASHBOARD, element:"dashboard"},// /protected/dashboard
            {path: TEST, element:"Test"},// /protected/test
            {path: SCORE, element:"Score"}, // /protected/score

        ]
    }
])