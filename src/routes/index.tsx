/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute";
import TicketsApp from "../pages/Tickets";

// lazy load all the views
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const RecoverPassword = React.lazy(() => import("../pages/auth/RecoverPassword"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));
const Dashboard = React.lazy(() => import("../pages/dashboard/"));
const TicketsAppRoute = React.lazy(() => import("../pages/Tickets"));
const Reports = React.lazy(() => import("../pages/report/Reports"));
const Uploads = React.lazy(() => import("../pages/UploadFilesPage/UploadFilesPage"));
const Billings = React.lazy(() => import("../pages/Billing/Billings"));
const Clients = React.lazy(() => import("../pages/client/Clients"));
const Messages = React.lazy(() => import("../pages/messages/Messages")); // Add Messages

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

// dashboards
const dashboardRoutes: RoutesProps = {
  path: "/home",
  name: "Dashboards",
  icon: "home",
  header: "Navigation",
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/dashboard" />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      element: <Dashboard />,
      route: PrivateRoute,
    },
  ],
};

// Apps
const ticketsAppRoutes: RoutesProps = {
  path: "/apps/tickets",
  name: "Tickets",
  route: PrivateRoute,
  icon: "mgc_coupon_line",
  element: <TicketsAppRoute />,
  header: "Apps",
};

const reportsRoute: RoutesProps = {
  path: "/report",
  name: "Reports",
  element: <Reports />,
  route: PrivateRoute,
  icon: "mgc_file_line",
  header: "Apps",
};

const uploadsRoute: RoutesProps = {
  path: "/uploads",
  name: "Upload Files",
  element: <Uploads />,
  route: PrivateRoute,
  icon: "mgc_upload_2_line",
  header: "Apps",
};

const billingsRoute: RoutesProps = {
  path: "/billings",
  name: "Billings",
  element: <Billings />,
  route: PrivateRoute,
  icon: "mgc_credit_card_line",
  header: "Apps",
};



const clientsRoute: RoutesProps = {
  path: "/clients",
  name: "Clients",
  element: <Clients />,
  route: PrivateRoute,
  icon: "mgc_user_3_line",
  header: "Apps",
};

const messagesRoute: RoutesProps = {
  path: "/messages",
  name: "Messages",
  element: <Messages />,
  route: PrivateRoute,
  icon: "mgc_message_line",
  header: "Apps",
};

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "/auth/login",
    name: "Login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
  {
    path: "/auth/recover-password",
    name: "Recover Password",
    element: <RecoverPassword />,
    route: Route,
  },
  {
    path: "/auth/lock-screen",
    name: "Lock Screen",
    element: <LockScreen />,
    route: Route,
  },
];

// public routes
const otherPublicRoutes = [
  {
    path: "*",
    name: "Error - 404",
    element: <Navigate to="/auth/login" />,
    route: Route,
  },
];

const authProtectedRoutes = [
  dashboardRoutes,
  ticketsAppRoutes,
  reportsRoute,
  uploadsRoute,
  billingsRoute,
  clientsRoute,
  messagesRoute, // Add Messages route
];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];
  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);
    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
};