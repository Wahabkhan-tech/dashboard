import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { useViewPort } from "../hooks";
import { changeSideBarType } from "../redux/actions";
import { SideBarType } from "../constants/layout";
import { Bell } from "feather-icons-react";
import { getMenuItems, MenuItemTypes } from "../helpers/menu";

const getPageName = (pathname: string): string => {
  const pathMap: { [key: string]: string } = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/apps/tickets": "Tickets",
    "/report": "Reports",
    "/uploads": "Upload Files",
    "/billings": "Billings",
    "/clients": "Clients", // Added for Clients page
    "/messages": "Messages", // Added for Messages page
    "/auth/login": "Login",
    "/auth/register": "Register",
    "/auth/recover-password": "Recover Password",
    "/auth/lock-screen": "Lock Screen",
  };
  return pathMap[pathname] || "Unknown Page";
};

interface TopbarProps {
  onFilterMenuItems: (filteredItems: MenuItemTypes[]) => void;
}

const Topbar = ({ onFilterMenuItems }: TopbarProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useViewPort();
  const location = useLocation();
  const currentPage = getPageName(location.pathname);
  const [searchQuery, setSearchQuery] = useState("");

  const { sideBarType } = useSelector((state: RootState) => ({
    sideBarType: state.Layout.sideBarType,
  }));

  // Handle search input and filter menu items
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredItems = getMenuItems().filter(
      (item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        (item.children?.some((child) =>
          child.label.toLowerCase().includes(query.toLowerCase())
        ) ?? false)
    );

    onFilterMenuItems(filteredItems);
  };

  /**
   * Toggle the left sidebar between default and condensed (small) modes
   */
  const handleLeftMenuCallBack = () => {
    if (width < 1140) {
      // Mobile behavior: toggle mobile sidebar
      if (sideBarType === SideBarType.LEFT_SIDEBAR_TYPE_MOBILE) {
        showLeftSideBarBackdrop();
        document.getElementsByTagName("html")[0].classList.add("sidenav-enable");
      } else {
        dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_MOBILE));
      }
    } else {
      // Desktop behavior: toggle between default and condensed
      if (sideBarType === SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT) {
        dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_SMALL));
      } else if (sideBarType === SideBarType.LEFT_SIDEBAR_TYPE_SMALL) {
        dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT));
      }
    }
  };

  /**
   * Creates backdrop for mobile sidebar
   */
  function showLeftSideBarBackdrop() {
    const backdrop = document.createElement("div");
    backdrop.id = "backdrop";
    backdrop.className = "transition-all fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80";
    document.body.appendChild(backdrop);

    backdrop.addEventListener("click", function () {
      document.getElementsByTagName("html")[0].classList.remove("sidenav-enable");
      toggleBodyStyle(false);
      dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_MOBILE));
      hideLeftSideBarBackdrop();
    });
  }

  function hideLeftSideBarBackdrop() {
    const backdrop = document.getElementById("backdrop");
    document.getElementsByTagName("html")[0].classList.remove("sidenav-enable");
    if (backdrop) {
      document.body.removeChild(backdrop);
      document.body.style.removeProperty("overflow");
    }
  }

  /**
   * Toggles style to the body tag for mobile sidebar
   */
  function toggleBodyStyle(set: boolean) {
    if (set === false) {
      document.body.removeAttribute("style");
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "16px";
    }
  }

  return (
    <header className="app-header flex items-center px-4 py-2 bg-white shadow-md dark:bg-gray-800">
      {/* Menu Toggle Button */}
      <button
        id="button-toggle-menu"
        className="nav-link p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-200 mr-2"
        onClick={handleLeftMenuCallBack}
        aria-label="Toggle Menu"
      >
        <span className="flex items-center justify-center h-6 w-6">
          <i className="mgc_menu_line text-xl"></i>
        </span>
      </button>

      {/* Page Name */}
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mx-4">
        {currentPage}
      </div>

      {/* Spacer to push remaining elements to the right */}
      <div className="flex-grow"></div>

      {/* Search Bar, Upload File Button, and Notification Icon */}
      <div className="flex items-center space-x-2">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-48 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            aria-label="Search"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Upload File Button */}
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-200"
          aria-label="Upload File"
        >
          Upload File
        </button>

        {/* Notification Icon */}
        <button
          className="p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-200 relative"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center -mt-1 -mr-1">3</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;