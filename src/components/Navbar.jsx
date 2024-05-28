import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFilterVintage } from "react-icons/md";
import { TiPencil } from "react-icons/ti";

export default function Navbar() {
  return (
    <header className="flex justify-between bg-primary  text-primary_text px-10 py-5">
      <Link className="flex items-center gap-1 text-3xl" to="/">
        <MdOutlineFilterVintage />
        <h1>Vintage_shoppy</h1>
      </Link>
      <nav className="flex items-center gap-10 shrink-0 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link className="text-xl" to="/products/new">
          <TiPencil />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
