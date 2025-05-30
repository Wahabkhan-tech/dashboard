import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { APICore } from "../helpers/api/apiCore";
import { routePermissions, UserRoles } from "../constants/permissions";

// Define props for PrivateRoute
interface PrivateRouteProps {
  component: React.ComponentType<any>;
  [key: string]: any; // For other route props like path
}

// ErrorBoundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please log in again.</h1>;
    }
    return this.props.children;
  }
}

// PrivateRouteWrapper to handle the logic with useLocation
const PrivateRouteWrapper: React.FC<{ component: React.ComponentType<any> }> = ({ component: Component }) => {
  const api = new APICore();
  const location = useLocation(); // Use useLocation hook to get the current location

  if (!api.isUserAuthenticated()) {
    console.log("Not authenticated, redirecting to login");
    return (
      <Navigate
        to={{
          pathname: "/auth/login",
          search: `next=${location.pathname || "/dashboard"}`,
        }}
      />
    );
  }

  const loggedInUser = api.getLoggedInUser();
  const userRole = loggedInUser?.role || UserRoles.CUSTOMER;
  console.log("User Role:", userRole, "Current Path:", location.pathname);
  const allowedRoutes = routePermissions[userRole as UserRoles] || [];
  const currentPath = location.pathname || "/";

  if (!allowedRoutes.includes(currentPath)) {
    console.log("Access denied, redirecting to forbidden");
    return <Navigate to="/forbidden" />;
  }

  return <Component />;
};

// Main PrivateRoute component
const PrivateRoute = ({ component, ...rest }: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      element={
        <ErrorBoundary>
          <PrivateRouteWrapper component={component} />
        </ErrorBoundary>
      }
    />
  );
};

export default PrivateRoute;