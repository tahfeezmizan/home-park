import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Header/Login.jsx';
import Register from './components/Header/Register.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import Root from './components/Root.jsx';
import './index.css';
import Propertie from './components/Propertie/Propertie.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import PropertieDetails from './components/Propertie/PropertieDetails.jsx';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes.jsx';
import LatestPost from './components/LatestPost/LatestPost.jsx';
import { HelmetProvider } from 'react-helmet-async';
import About from './components/About/About.jsx';
import Profile from './components/Profile/Profile.jsx';
import PropertiesBanner from './components/Propertie/PropertiesBanner.jsx';
import LatestPostBanner from './components/LatestPost/LatestPostBanner.jsx';
import WishlistProperties from './components/Propertie/WishlistProperties.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/cards/:id',
        element: <PrivateRoutes><PropertieDetails></PropertieDetails></PrivateRoutes>,
        loader: () => fetch('/residential.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/propertie',
        element: <><PropertiesBanner></PropertiesBanner><Propertie></Propertie></>,
        loader: () => fetch('/residential.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/blog',
        element: <><LatestPostBanner></LatestPostBanner> <LatestPost></LatestPost></>,
        loader: () => fetch('/latestpost.json')
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
      },
      {
        path: '/wishlist',
        element: <PrivateRoutes><WishlistProperties></WishlistProperties></PrivateRoutes>,
        loader: () => fetch('/residential.json')
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
