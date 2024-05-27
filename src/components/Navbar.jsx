import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFilterVintage } from "react-icons/md";
import { TiPencil } from "react-icons/ti";

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <MdOutlineFilterVintage />
        <h1>Vintage_shoppy</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new">
          <TiPencil />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
