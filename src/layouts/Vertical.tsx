import React, { ReactNode, Suspense, useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import * as layoutConstants from "../constants/layout";

// hooks
import { useViewPort } from "../hooks";
import { changeHTMLAttribute } from "../utils/layout";
import { changeSideBarType } from "../redux/actions";
import { Preloader } from "../components";

// code splitting and lazy loading
const Topbar = React.lazy(() => import("./Topbar"));
const LeftSideBar = React.lazy(() => import("./LeftSideBar"));
const Footer = React.lazy(() => import("./Footer"));
const RightSideBar = React.lazy(() => import("./RightSideBar"));

// Import Chatbot
import Chatbot from "./Chatbot";

// Import menu types
import { getMenuItems, MenuItemTypes } from "../helpers/menu";

const loading = () => <div />;

interface VerticalLayoutProps {
  children?: ReactNode;
}

const VerticalLayout = ({ children }: VerticalLayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useViewPort();

  const {
    layoutTheme,
    layoutDirection,
    layoutWidth,
    topBarTheme,
    sideBarTheme,
    sideBarType,
    layoutPosition,
  } = useSelector((state: RootState) => ({
    layoutTheme: state.Layout.layoutTheme,
    layoutDirection: state.Layout.layoutDirection,
    layoutWidth: state.Layout.layoutWidth,
    topBarTheme: state.Layout.topBarTheme,
    sideBarTheme: state.Layout.sideBarTheme,
    sideBarType: state.Layout.sideBarType,
    layoutPosition: state.Layout.layoutPosition,
    isOpenRightSideBar: state.Layout.isOpenRightSideBar,
  }));

  // State for filtered menu items
  const [filteredMenuItems, setFilteredMenuItems] = useState<MenuItemTypes[]>(
    getMenuItems() as MenuItemTypes[]
  );

  // Layout defaults
  useEffect(() => {
    changeHTMLAttribute("data-mode", layoutTheme);
  }, [layoutTheme]);

  useEffect(() => {
    changeHTMLAttribute("dir", layoutDirection);
  }, [layoutDirection]);

  useEffect(() => {
    changeHTMLAttribute("data-layout-width", layoutWidth);
  }, [layoutWidth]);

  useEffect(() => {
    changeHTMLAttribute("data-topbar-color", topBarTheme);
  }, [topBarTheme]);

  useEffect(() => {
    changeHTMLAttribute("data-menu-color", sideBarTheme);
  }, [sideBarTheme]);

  useEffect(() => {
    changeHTMLAttribute("data-sidenav-view", sideBarType);
  }, [sideBarType]);

  useEffect(() => {
    changeHTMLAttribute("data-layout-position", layoutPosition);
  }, [layoutPosition]);

  useEffect(() => {
    document.getElementsByTagName("html")[0].removeAttribute("data-layout");
  }, []);

  // Sidebar type toggling based on viewport width
  useEffect(() => {
    if (width <= 1140) {
      dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_MOBILE));
    } else if (width > 1140) {
      // Ensure we respect the current sidebar state (e.g., if it's SMALL due to collapse)
      if (
        sideBarType !== layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_SMALL &&
        sideBarType !== layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HOVER &&
        sideBarType !== layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE
      ) {
        dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT));
      }
    }
  }, [width, dispatch, sideBarType]);

  const isCondensed = sideBarType === layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_SMALL;
  const isLight = sideBarTheme === layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT;

  const handleFilterMenuItems = (items: MenuItemTypes[]) => {
    setFilteredMenuItems(items);
  };

  return (
    <>
      <Suspense fallback={loading()}>
        <div
          className="flex wrapper"
          style={{
            background:
              layoutTheme === layoutConstants.LayoutTheme.THEME_LIGHT
                ? "linear-gradient(470deg, #F8F8F8 0%, #ECD0FD 100%)"
                : undefined,
            minHeight: "100vh",
          }}
        >
          <Suspense fallback={loading()}>
            <LeftSideBar
              isCondensed={isCondensed}
              isLight={isLight}
              hideLogo={false}
              filteredMenuItems={filteredMenuItems}
            />
          </Suspense>

          <div className="page-content">
            <Suspense fallback={loading()}>
              <Topbar onFilterMenuItems={handleFilterMenuItems} />
            </Suspense>

            <main className="flex-grow p-6">
              <Suspense fallback={<Preloader />}>{children}</Suspense>
            </main>

            <Footer />
          </div>
        </div>

        <Suspense fallback={loading()}>
          <RightSideBar />
        </Suspense>

        <Chatbot />
      </Suspense>
    </>
  );
};

export default VerticalLayout;