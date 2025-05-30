import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../components";

const Forbidden = () => {
  return (
    <>
      <PageBreadcrumb title="Access Denied" />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          403 - Access Denied
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          You do not have permission to access this page.
        </p>
        <Link
          to="/dashboard"
          className="btn bg-primary text-white px-6 py-2 rounded-lg"
        >
          Return to Dashboard
        </Link>
      </div>
    </>
  );
};

export default Forbidden;   