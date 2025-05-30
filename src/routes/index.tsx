import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/";
import Tickets from "../pages/Tickets";
import Reports from "../pages/report/Reports";
import Uploads from "../pages/UploadFilesPage/UploadFilesPage";
import Billings from "../pages/Billing/Billings";
import Clients from "../pages/client/Clients";
import Messages from "../pages/messages/Messages";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RecoverPassword from "../pages/auth/RecoverPassword";
import LockScreen from "../pages/auth/LockScreen";
import Forbidden from "../pages/error/Forbidden";
import { UserRoles } from "../constants/permissions";

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

const dashboardRoutes: RoutesProps = {
  path: "/home",
  name: "Dashboards",
  icon: "mgc_home_3_line",
  header: "Navigation",
  roles: [UserRoles.ADMIN, UserRoles.CONSULTANT, UserRoles.CUSTOMER],
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/dashboard" />,
      route: PrivateRoute,
      roles: [UserRoles.ADMIN, UserRoles.CONSULTANT, UserRoles.CUSTOMER],
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      element: <Dashboard />,
      route: PrivateRoute,
      roles: [UserRoles.ADMIN, UserRoles.CONSULTANT, UserRoles.CUSTOMER],
    },
  ],
};

const ticketsRoute: RoutesProps = {
  path: "/apps/tickets",
  name: "Tickets",
  element: <Tickets />,
  route: PrivateRoute,
  icon: "mgc_coupon_line",
  header: "Apps",
  roles: [UserRoles.ADMIN, UserRoles.CONSULTANT, UserRoles.CUSTOMER],
};

const reportsRoute: RoutesProps = {
  path: "/report",
  name: "Reports",
  element: <Reports />,
  route: PrivateRoute,
  icon: "mgc_file_line",
  header: "Apps",
  roles: [UserRoles.ADMIN, UserRoles.CONSULTANT],
};

const uploadsRoute: RoutesProps = {
  path: "/uploads",
  name: "Upload Files",
  element: <Uploads />,
  route: PrivateRoute,
  icon: "mgc_upload_2_line",
  header: "Apps",
  roles: [UserRoles.ADMIN, UserRoles.CONSULTANT],
};

const billingsRoute: RoutesProps = {
  path: "/billings",
  name: "Billings",
  element: <Billings />,
  route: PrivateRoute,
  icon: "mgc_wallet_line",
  header: "Apps",
  roles: [UserRoles.ADMIN, UserRoles.CONSULTANT],
};

const clientsRoute: RoutesProps = {
  path: "/clients",
  name: "Clients",
  element: <Clients />,
  route: PrivateRoute,
  icon: "mgc_user_3_line",
  header: "Apps",
  roles: [UserRoles.ADMIN, UserRoles.CONSULTANT],
};

const messagesRoute: RoutesProps = {
  path: "/messages",
  name: "Messages",
  element: <Messages />,
  route: PrivateRoute,
  icon: "mgc_message_2_line",
  header: "Apps",
  roles: [UserRoles.ADMIN, UserRoles.CONSULTANT, UserRoles.CUSTOMER],
};

const authRoutes: RoutesProps[] = [
  {
    path: "/auth/login",
    name: "Login",
    element: <Login />,
    route: Route,
    roles: [UserRoles.ADMIN, UserRoles.CONSULTANT, UserRoles.CUSTOMER],
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
    roles: [UserRoles.ADMIN],
  },
  {
    path: "/auth/recover-password",
    name: "Recover Password",
    element: <RecoverPassword />,
    route: Route,
    roles: [UserRoles.ADMIN, UserRoles.CONSULTANT, UserRoles.CUSTOMER],
  },
  {
    path: "/auth/lock-screen",
    name: "Lock Screen",
    element: <LockScreen />,
    route: Route,
    roles: [UserRoles.ADMIN],
  },
];

const otherPublicRoutes = [
  {
    path: "/forbidden",
    name: "Forbidden",
    element: <Forbidden />,
    route: Route,
    roles: [UserRoles.ADMIN, UserRoles.CONSULTANT, UserRoles.CUSTOMER],
  },
  {
    path: "*",
    name: "Error - 404",
    element: <Navigate to="/auth/login" />,
    route: Route,
    roles: [UserRoles.ADMIN, UserRoles.CONSULTANT, UserRoles.CUSTOMER],
  },
];

const authProtectedRoutes = [
  dashboardRoutes,
  ticketsRoute,
  reportsRoute,
  uploadsRoute,
  billingsRoute,
  clientsRoute,
  messagesRoute,
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