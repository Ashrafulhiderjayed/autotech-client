import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Services from "../pages/Services/Services";
import Appointment from "../pages/Appointment/Appointment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'appointment',
          element: <Appointment></Appointment>
        },
        {
          path: '/service/:id',
          element: <Services></Services>,
          loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        
      ]
    },
]);

export default router;