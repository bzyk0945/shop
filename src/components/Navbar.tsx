import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/frontend_assets/logo.png";
import MenuIcon from "../assets/frontend_assets/menu_icon.png";
import CloseMenuIcon from "../assets/frontend_assets/cross_icon.png";
import SearchIcon from "../assets/frontend_assets/search_icon.png";
import ProfileIcon from "../assets/frontend_assets/profile_icon.png";
import CartIcon from "../assets/frontend_assets/cart_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setShowSearch } from "../store/shopSlice";
import { RootState } from "../store";


const Navbar = () => {
  const dispatch = useDispatch()
  const showSearch = useSelector((state: RootState) => state.shop.showSearch)
  const cartItems = useSelector((state: RootState) => state.shop.cartItems)
  const [isVisibleNav, setIsVisibleNav] = useState<boolean>(true);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState<boolean>(false);
  const lastScrollY = useRef(0)
  const location = useLocation();

  const handleClickMobileNav = () => {
    setIsOpenMobileNav(!isOpenMobileNav);
  };

  const handleClickSearchIcon = () => {
    dispatch(setShowSearch(!showSearch))
    dispatch(setSearch(''))
  }


  useEffect(() => {
    setIsOpenMobileNav(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if(!isOpenMobileNav) {
        if (window.scrollY > lastScrollY.current) {
          setIsVisibleNav(false);
        } else {
          setIsVisibleNav(true);
        }
        lastScrollY.current = window.scrollY
      };
      }
      
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpenMobileNav]);

  return (
    <header
      className={`sticky top-0 z-50 px-4 py-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${isVisibleNav ? "translate-y-0" : "-translate-y-full"} ${lastScrollY.current > 0 && "bg-gray-100 border-b shadow-md"}`}
    >
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="logo page forever" className="w-36" />
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex list-none items-center justify-between gap-4 font-medium lg:gap-6">
            <NavLink
              to="/"
              className="mb-[2px] flex flex-col items-center px-2 py-3 uppercase"
            >
              home
              <hr className="hidden h-[3px] w-full bg-gray-700" />
            </NavLink>
            <NavLink
              to="/collection"
              className="mb-[2px] flex flex-col items-center px-2 py-3 uppercase"
            >
              collection
              <hr className="hidden h-[3px] w-full bg-gray-700" />
            </NavLink>
            <NavLink
              to="/about"
              className="mb-[2px] flex flex-col items-center px-2 py-3 uppercase"
            >
              about
              <hr className="hidden h-[3px] w-full bg-gray-700" />
            </NavLink>
            <NavLink
              to="/contact"
              className="mb-[2px] flex flex-col items-center px-2 py-3 uppercase"
            >
              contact
              <hr className="hidden h-[3px] w-full bg-gray-700" />
            </NavLink>
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-4">
          <Link to="/collection" className="p-2" onClick={handleClickSearchIcon}>
            <img src={SearchIcon} alt="search icon" className="w-5" />
          </Link>
          <Link to="/login" className="p-2">
            <img src={ProfileIcon} alt="user icon" className="w-5" />
          </Link>
          <Link to="/cart" className="relative p-2">
            <img src={CartIcon} alt="cart icon" className="w-5" />
            <span className="absolute bottom-0 right-[1px] aspect-square w-4 rounded-full bg-black text-center text-[8px] leading-4 text-white">
              {cartItems.length}
            </span>
          </Link>
          <button
            className="p-2 md:hidden"
            onClick={() => handleClickMobileNav()}
          >
            {isOpenMobileNav ? (
              <img src={CloseMenuIcon} alt="close menu icon" className="w-5" />
            ) : (
              <img src={MenuIcon} alt="menu icon" className="w-5" />
            )}
          </button>
        </div>
      </div>
      {/* MOBILE NAWIGATION */}
      {isOpenMobileNav && (
        <div className={`flex flex-col items-center text-center md:hidden ${isVisibleNav ? 'visible' : 'hidden'}`}>
          <nav className="flex flex-col items-center gap-4 font-semibold">
            <NavLink to="/" className="mt-4 px-4 py-2 uppercase">
              home
              <hr className="hidden h-[3px] w-full bg-gray-700" />
            </NavLink>
            <NavLink to="/collection" className="px-4 py-2 uppercase">
              collection
              <hr className="hidden h-[3px] w-full bg-gray-700" />
            </NavLink>
            <NavLink to="/about" className="px-4 py-2 uppercase">
              about
              <hr className="hidden h-[3px] w-full bg-gray-700" />
            </NavLink>
            <NavLink to="/contact" className="px-4 py-2 uppercase">
              contact
              <hr className="hidden h-[3px] w-full bg-gray-700" />
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
