import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const navLinkStyles = ({ isActive }) =>
  `hover:text-white cursor-pointer transition-colors ${isActive ? "text-[#c6f605]" : "text-[#878787]"
  }`;

const Navbar = ({ setShowCart }) => {
  const { cart } = useCart();
  const { loggedInUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const totalItems = cart
    ? cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    : 0;

  const displayName = loggedInUser?.fullName || loggedInUser?.name || "User";
  const displayInitial = displayName.charAt(0).toUpperCase();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0d0d0d]/95 backdrop-blur-md px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3">
        <Link
          to="/main"
          className="flex font-['Syne'] items-center text-white text-lg font-bold"
        >
          <div className="bg-[#c8f400] p-2 rounded-xl text-[#0e0e0e] flex items-center justify-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="#0e0e0e"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </div>
          <p className="pl-2.5">
            Sky<span className="text-[#c8f400]">Mart</span>
          </p>
        </Link>

        <div className="flex font-['DM'] items-center gap-8 font-medium">
          <NavLink to="/main" className={navLinkStyles} end>
            Home
          </NavLink>
          <NavLink to="/main/products" className={navLinkStyles}>
            Shop
          </NavLink>
          <NavLink to="/main/about" className={navLinkStyles}>
            About
          </NavLink>
        </div>

        <div className="flex font-['DM'] items-center gap-2">
          <div className="flex items-center gap-2 bg-[#191919] border border-[#262626] rounded-xl px-2.5 py-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#c6f605] text-black font-bold text-sm flex items-center justify-center">
              {displayInitial}
            </div>
            <span className="text-sm font-medium text-[#bbbbbb] pr-1">
              {displayName}
            </span>
          </div>

          <button
            onClick={() => setShowCart(true)}
            className="relative p-2.5 rounded-xl border border-[#262626] text-white hover:bg-[#191919] transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>

            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#c6f605] text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center font-['DM']">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={handleLogout}
            title="Logout"
            className="p-2.5 rounded-xl border border-[#262626] text-white cursor-pointer hover:text-[#f87171] hover:bg-[#3b1919] hover:border-[#722727] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;