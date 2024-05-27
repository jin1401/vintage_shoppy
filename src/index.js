import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>Not found...</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        elemnt: <AllProducts />,
      },
      {
        path: "/carts",
        elemnt: <MyCart />,
      },
      {
        path: "/products/new",
        elemnt: <NewProduct />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
