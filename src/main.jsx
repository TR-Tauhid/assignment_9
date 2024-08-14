import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Root from './Root';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import properties from './assets/properties.json'
import Login from './components/Login';
import Register from './components/Register';
import EstateDetail from './components/EstateDetail';
import UpdateProfile from './components/UpdateProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => {
          return  properties ;
        },
        element: <Home></Home>,
      },
      {
        path: "/estateDetail",
        element: <EstateDetail></EstateDetail>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
