import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";

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
  }
]);

export default router;