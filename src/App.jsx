// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Mens from './Pages/Mens';
import Womens from './Pages/Womens';
import Kids from './Pages/Kids';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import SingleProduct from './Components/SingleProduct';
import Footer from './Components/Footer';
import ErrorPage from './Pages/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /><Footer /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mens",
    element: <><Navbar /><Mens /><Footer /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/womens",
    element: <><Navbar /><Womens /><Footer /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/kids",
    element: <><Navbar /><Kids /><Footer /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <><Navbar /><Login /><Footer /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <><Navbar /><Cart /><Footer /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:productId",
    element: <><Navbar /><SingleProduct /><Footer /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <><Navbar /><Home /><Footer /></>,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
