import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllTask from "../Pages/Dashboard/AllTask/AllTask";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><AllTask /></PrivateRoute>
      },
      {
        path: "allTask",
        element: <PrivateRoute><AllTask /></PrivateRoute>
      }
    ]
  }
]);

export default router;