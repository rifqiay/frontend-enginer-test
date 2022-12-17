import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { qty } = useSelector((state) => state.carts);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center mt-5 gap-5">
      <ul className="flex gap-3 font-semibold cursor-pointer ">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Store
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            to="/shopping-cart"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Shopping Cart
          </NavLink>
          <div className="absolute -right-7 -top-2 border px-2 rounded-full bg-slate-200">
            {qty}
          </div>
        </li>
      </ul>
      <button
        className="cursor-pointer hover:bg-slate-50 transition duration-300 px-3 py-1 rounded-md font-semibold"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
