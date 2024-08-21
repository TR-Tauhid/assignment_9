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
import AuthProvider from './provider/AuthProvider';
import PrivateRouter from './routes/PrivateRouter';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './components/ErrorPage';
import YourProfile from './components/YourProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => properties,
        element: <Home></Home>,
      },
      {
        path: "/estateDetail/:id",
        loader: ({ params }) => {
          const propertyId = params.id;
          const property = properties.find(prop => prop.id == propertyId)
          return property ? property : null;
        },
        element: <PrivateRouter><EstateDetail></EstateDetail></PrivateRouter>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateProfile",
        element: <PrivateRouter><UpdateProfile></UpdateProfile></PrivateRouter>,
      },
      {
        path: "/yourProfile",
        element: <PrivateRouter><YourProfile></YourProfile></PrivateRouter>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
