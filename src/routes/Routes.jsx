import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";
import ContactUs from "../pages/ContactUs/ContactUs";
import EstatesDetails from "../pages/EstatesDetails/EstatesDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Sale from "../pages/Sale/Sale";
import Rent from "../pages/Rent/Rent";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
    {
    path: "/",
    element: <Home></Home>,
    },
    {
    path: "/update",
    element:<PrivateRoute>
      <UpdateProfile></UpdateProfile>
    </PrivateRoute>
    
    },
{
path: "/user",
element: <PrivateRoute>
  <UserProfile></UserProfile>
</PrivateRoute>

},
{
path: "/sale",
element: <PrivateRoute>
<Sale></Sale>
</PrivateRoute>,
},
{
  path: "/rent",
  element: <PrivateRoute>
<Rent></Rent>
  </PrivateRoute>,
  },

{
path: "/contact",
element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>,
},
{
path: "/details/:id",
element: <PrivateRoute><EstatesDetails></EstatesDetails></PrivateRoute>,
loader: () => fetch('/card.json'),
},
{
path: "/login",
element: <Login></Login>,
},
{
path: "/register",
element: <Register></Register>,

},

    ]
    },
  ]);

  export default router;