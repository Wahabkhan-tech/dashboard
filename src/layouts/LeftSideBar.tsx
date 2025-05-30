import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { useSelector, useDispatch } from "react-redux";
import { getMenuItems, MenuItemTypes } from "../helpers/menu";
import { APICore } from "../helpers/api/apiCore"; // Import APICore

// constants
import AppMenu from "./Menu";
import * as LayoutConstants from "../constants/layout";

// store
import { AppDispatch, RootState } from "../redux/store";
import { changeSideBarType } from "../redux/actions";

// images
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";
import logoSm from "../assets/images/logo-sm.png";

// components
import { ProfileDropDown } from "../components";

// avatar
import profilePic from "../assets/images/users/avatar-6.jpg";

export type ProfileMenuItem = {
  label: string;
  icon: string;
  redirectTo: string;
};

/* Profile menu items */
const profileMenus: ProfileMenuItem[] = [
  {
    label: "Lock Screen",
    icon: "mgc_lock_line me-2",
    redirectTo: "/auth/lock-screen",
  },
  {
    label: "Logout",
    icon: "mgc_logout_line me-2",
    redirectTo: "/auth/login",
  },
];

/* Sidebar content with filtered menu items */
const SideBarContent = ({ filteredMenuItems }: { filteredMenuItems: MenuItemTypes[] }) => {
  return (
    <>
      {/* Menu Items Heading (hidden when condensed) */}
      <div className="px-4 py-2">
        <h3 className="text-sm font-semibold text-gray-600 transition-opacity duration-300 ease-in-out">
          Menu Items
        </h3>
      </div>

      {/* Menu */}
      <AppMenu menuItems={filteredMenuItems} />
    </>
  );
};

interface LeftSideBarProps {
  isCondensed: boolean;
  isLight?: boolean;
  hideLogo?: boolean;
  filteredMenuItems: MenuItemTypes[];
}

const HoverMenuToggler = () => {
  const { sideBarType } = useSelector((state: RootState) => ({
    sideBarType: state.Layout.sideBarType,
  }));

  const dispatch = useDispatch<AppDispatch>();

  function toggleHoverMenu() {
    if (sideBarType === LayoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HOVER) {
      dispatch(changeSideBarType(LayoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE));
    } else if (sideBarType === LayoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE) {
      dispatch(changeSideBarType(LayoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HOVER));
    } else if (sideBarType === "right-half") {
      dispatch(changeSideBarType(LayoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT));
    }
  }

  return (
    <button
      id="button-hover-toggle"
      className="absolute top-5 end-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-200"
      onClick={toggleHoverMenu}
    >
      <span className="sr-only">Menu Toggle Button</span>
      <i className="mgc_round_line text-xl"></i>
    </button>
  );
};

const LeftSideBar = ({ isCondensed, isLight, hideLogo, filteredMenuItems }: LeftSideBarProps) => {
  const { sideBarType } = useSelector((state: RootState) => ({
    sideBarType: state.Layout.sideBarType,
  }));

  const dispatch = useDispatch<AppDispatch>();

  const isHalfRight = sideBarType === "right-half";

  // State to manage user name and role (from sessionStorage)
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "John Doe");
  const [userRole, setUserRole] = useState<string | null>(null);

  // Initialize APICore
  const api = new APICore();

  // Update user name and role when sessionStorage changes or on mount
  useEffect(() => {
    const handleStorageChange = () => {
      const user = api.getLoggedInUser();
      setUserName(user?.firstName + " " + user?.lastName || localStorage.getItem("userName") || "John Doe");
      setUserRole(user?.role || null);
    };

    // Set initial values
    handleStorageChange();

    // Add event listener for storage changes
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // User data
  const user = {
    name: userName,
    role: userRole || "Admin", // Fallback to "Admin" if role is not available
    avatar: profilePic,
  };

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT_SUCCESS" });
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/auth/login";
  };

  return (
    <React.Fragment>
      <div
        className={`app-menu ${isCondensed ? "condensed" : ""} ${isLight ? "light" : ""} ${
          isHalfRight ? "w-32 right-0 translate-x-full" : ""
        } bg-white dark:bg-gray-800 shadow-md h-full fixed transition-all duration-300 z-40`}
        style={{
          width: isCondensed ? "60px" : isHalfRight ? "128px" : "256px",
          transform: isHalfRight ? "translateX(-50%)" : "translateX(0)",
          left: isCondensed ? "0" : "",
        }}
      >
        {!hideLogo && (
          <Link to="/" className="logo-box p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="logo-light">
              <img
                src={logoLight}
                className="logo-lg"
                style={{ height: isCondensed ? "30px" : isHalfRight ? "40px" : "60px" }}
                alt="Light logo"
              />
              <img
                src={logoSm}
                className="logo-sm"
                style={{ height: isCondensed ? "20px" : isHalfRight ? "30px" : "40px" }}
                alt="Small logo"
              />
            </div>
            <div className="logo-dark">
              <img
                src={logoDark}
                className="logo-lg"
                style={{ height: isCondensed ? "30px" : isHalfRight ? "40px" : "60px" }}
                alt="Dark logo"
              />
              <img
                src={logoSm}
                className="logo-sm"
                style={{ height: isCondensed ? "20px" : isHalfRight ? "30px" : "40px" }}
                alt="Small logo"
              />
            </div>
          </Link>
        )}

        <HoverMenuToggler />

        <SimpleBar
          className="scrollbar h-[calc(100%-140px)]"
          id="leftside-menu-container"
        >
          <SideBarContent filteredMenuItems={filteredMenuItems} />

          {/* Added "Unlimited Access" Help Box (optional, can be removed if not needed) */}
          
        </SimpleBar>

        {/* Profile Section with Avatar, Name, and Role */}
        <div
          className={`relative p-4 border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ${
            isCondensed ? "p-2" : ""
          }`}
        >
          <button
            className="flex items-center w-full text-left focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-expanded={isDropdownOpen}
            aria-label="Toggle Profile Dropdown"
          >
            <img
              src={user.avatar}
              alt="User Avatar"
              className={`w-${isCondensed ? "8" : "10"} h-${isCondensed ? "8" : "10"} rounded-full mr-${
                isCondensed ? "1" : "3"
              }`}
            />
            {!isCondensed && (
              <div>
                <div className="font-semibold text-gray-700 dark:text-gray-300">{user.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{user.role}</div>
              </div>
            )}
          </button>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className={`absolute bg-white dark:bg-gray-800 shadow-lg rounded-lg w-48 p-2 z-50 bottom-full mb-2 ${
                isCondensed ? "hidden" : ""
              }`}
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              {profileMenus.map((item, index) => (
                <div key={index}>
                  {item.label === "Logout" ? (
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full text-left"
                    >
                      <i className={item.icon}></i> {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.redirectTo}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <i className={item.icon}></i> {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftSideBar;