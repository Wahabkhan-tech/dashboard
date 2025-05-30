import { useEffect } from "react";
import { Link } from "react-router-dom";

// form validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { resetAuth, signupUser } from "../../redux/actions";

// components
import { FormInput, VerticalForm, PageBreadcrumb } from "../../components";

// images
import emiratesTaxLogo from "../../assets/images/logo-dark.png";

interface UserData {
  fullname: string;
  email: string;
  password: string;
}

/* bottom links */
const BottomLink = () => {
  return (
    <p className="text-gray-500 text-center mt-4">
      Already have an account?{" "}
      <Link to="/auth/login" className="text-blue-600 hover:underline">
        <b>Log In</b>
      </Link>
    </p>
  );
};

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector((state: RootState) => ({
    loading: state.Auth.loading,
    error: state.Auth.error,
  }));

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      fullname: yup.string().required("Please enter Fullname"),
      email: yup.string().required("Please enter Email").email("Please enter valid Email"),
      password: yup.string().required("Please enter Password"),
    })
  );

  /*
   * handle form submission
   */
  const onSubmit = (formData: UserData) => {
    dispatch(signupUser(formData.fullname, formData.email, formData.password));
  };

  return (
    <>
      <PageBreadcrumb title="Register" />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white py-4 sm:py-6 lg:py-8">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-xl shadow-2xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/40">
          {/* Upper Part: Logo and Title */}
          <div className="text-center mb-4 sm:mb-6">
            <img
              src={emiratesTaxLogo}
              alt="Emirates Tax Logo"
              className="h-12 sm:h-14 md:h-16 mx-auto mb-2"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">VAT Reporting System</h1>
            <p className="text-gray-600 mt-1 sm:mt-2">
              Don’t have an account? Create your account, it takes less than a minute.
            </p>
          </div>

          {/* Form */}
          <VerticalForm<UserData>
            onSubmit={onSubmit}
            resolver={schemaResolver}
            formClass="space-y-3 sm:space-y-4"
          >
            {error && <div className="mb-2 sm:mb-4 text-red-600 text-center text-sm sm:text-base">{error}</div>}
            <FormInput
              label="Full Name"
              type="text"
              name="fullname"
              placeholder="Enter Full Name"
              containerClass="mb-2 sm:mb-4"
              className="w-full px-2 sm:px-3 py-1 sm:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              labelClassName="block text-xs sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1"
              required
            />
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your Email"
              containerClass="mb-2 sm:mb-4"
              className="w-full px-2 sm:px-3 py-1 sm:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              labelClassName="block text-xs sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1"
              required
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              containerClass="mb-2 sm:mb-4"
              className="w-full px-2 sm:px-3 py-1 sm:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              labelClassName="block text-xs sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1"
              required
            />
            <div className="mb-2 sm:mb-4">
              <FormInput
                label="I accept"
                type="checkbox"
                name="checkbox"
                containerClass="flex items-center"
                labelClassName="ml-1 text-xs sm:text-sm text-gray-600"
                className="form-checkbox rounded text-xs sm:text-base"
                otherComp={
                  <a href="#" target="_blank" className="text-blue-600 hover:underline ml-1 text-xs sm:text-sm">
                    Terms and Conditions
                  </a>
                }
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-1 sm:py-2 px-2 sm:px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </VerticalForm>

          {/* Bottom Part: Login Link */}
          <BottomLink />
        </div>
      </div>
    </>
  );
};

export default Register;