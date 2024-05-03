import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HealthFitness from "./components/healthAndFitnessPage/mainpage/HealthFitness.jsx";
import Shopping from "./components/healthAndFitnessPage/shop/Shopping.jsx";
import Cart from "./components/healthAndFitnessPage/shop/Cart.jsx";
import Game from "./components/Games/Game.jsx";
import Blog from "./components/blogpage/Blog.jsx";
import Maindashboard from "./components/dashboard/Maindashboard.jsx";
import AddPost from "./components/blogpage/AddPost.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { PostProvider } from "./context/PostContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/healthfitness",
    element: <HealthFitness />,
  },
  {
    path: "/healthfitness/shop",
    element: <Shopping />,
  },
  {
    path: "/healthfitness/shop/cart",
    element: <Cart />,
  },
  {
    path: "/gamesection",
    element: <Game />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  // {
  //   path: "/mindfullness",
  //   element: <DashboardApp />,
  // },
  {
    path: "/blog/addpost",
    element: <AddPost />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </PostProvider>
  </React.StrictMode>
);
