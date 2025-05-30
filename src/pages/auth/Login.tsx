import { useEffect, useState } from "react";
import { Navigate, Link, useLocation } from "react-router-dom";

// form validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { loginUser, resetAuth } from "../../redux/actions";

// components
import { VerticalForm, FormInput, PageBreadcrumb } from "../../components";

// images
import emiratesTaxLogo from "../../assets/images/logo-dark.png";

interface UserData {
  username: string;
  password: string;
  role: string;
}

/* bottom links */
const BottomLink = () => {
  return (
    <p className="text-gray-500 text-center mt-4">
      Don't have an account?{" "}
      <Link to="/auth/register" className="text-blue-600 hover:underline">
        <b>Register</b>
      </Link>
    </p>
  );
};

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user, userLoggedIn, loading, error } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    loading: state.Auth.loading,
    error: state.Auth.error,
    userLoggedIn: state.Auth.userLoggedIn,
  }));

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  const [selectedRole, setSelectedRole] = useState<"Admin" | "Customer" | "Consultant">("Admin");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const defaultCredentials = {
    Admin: { username: "admin@consultancy.com", password: "admin123" },
    Customer: { username: "customer@consultancy.com", password: "customer123" },
    Consultant: { username: "consultant@consultancy.com", password: "consult123" },
  };

  const roleUsernamePrefixes = {
    Admin: "admin@",
    Customer: "customer@",
    Consultant: "consultant@",
  };

  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required("Please enter Username"),
      password: yup.string().required("Please enter Password"),
    })
  );

  const onSubmit = (formData: UserData) => {
    const expectedPrefix = roleUsernamePrefixes[selectedRole];
    if (!formData.username.startsWith(expectedPrefix)) {
      setErrorMessage(`Please use ${selectedRole} credentials for the ${selectedRole} tab.`);
      return;
    }
    setErrorMessage(null);
    dispatch(loginUser(formData.username, formData.password, selectedRole));
  };

  const location = useLocation();
  const redirectUrl = location?.search?.slice(6) || "/";

  return (
    <>
      {(userLoggedIn || user) && <Navigate to={redirectUrl} />}
      <PageBreadcrumb title="Login" />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white py-8">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white/40">
          {/* Upper Part: Logo and Title */}
          <div className="text-center mb-6">
            <img src={emiratesTaxLogo} alt="Emirates Tax Logo" className="h-16 mx-auto mb-2" />
            <h1 className="text-2xl font-bold text-gray-800">VAT Reporting System</h1>
            <p className="text-gray-600 mt-2">Enter your email address and password to access the system.</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 mr-2 rounded-t-lg font-medium ${
                selectedRole === "Admin" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedRole("Admin")}
            >
              Admin
            </button>
            <button
              className={`px-4 py-2 mr-2 rounded-t-lg font-medium ${
                selectedRole === "Customer" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedRole("Customer")}
            >
              Customer
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg font-medium ${
                selectedRole === "Consultant" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedRole("Consultant")}
            >
              Consultant
            </button>
          </div>

          {/* Form */}
          <VerticalForm<UserData>
            onSubmit={onSubmit}
            resolver={schemaResolver}
            defaultValues={{
              username: defaultCredentials[selectedRole].username,
              password: defaultCredentials[selectedRole].password,
              role: selectedRole,
            }}
            formClass="space-y-4"
          >
            {(errorMessage || error) && (
              <div className="mb-4 text-red-600 text-center">{errorMessage || error}</div>
            )}
            <FormInput
              label="Email Address"
              type="text"
              name="username"
              placeholder="Enter your email"
              containerClass="mb-4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              labelClassName="block text-sm font-medium text-gray-600 mb-1"
              required
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              containerClass="mb-4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              labelClassName="block text-sm font-medium text-gray-600 mb-1"
              required
            />
            <div className="flex items-center justify-between mb-4">
              <FormInput
                label="Remember me"
                type="checkbox"
                name="checkbox"
                containerClass="flex items-center"
                labelClassName="ml-2 text-sm text-gray-600"
                className="form-checkbox rounded"
              />
              <Link to="/auth/recover-password" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </VerticalForm>

          {/* Bottom Part: Register Link */}
          <BottomLink />
        </div>
      </div>
    </>
  );
};

export default Login;
