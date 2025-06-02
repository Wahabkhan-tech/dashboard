import React from "react";

const LatestFileStatus = () => {
  const userRole = JSON.parse(sessionStorage.getItem("konrix_user") || "{}")?.role || "Customer";

  const heading = userRole === "Customer" ? "Latest Processing Status" : "Latest File Status";
  const content =
    userRole === "Customer"
      ? "No Files Being Processed"
      : "No Files Uploaded Recently";

  return userRole === "Consultant" || userRole === "Customer" ? (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold text-black">{heading}</h2>
      <p className="text-sm text-black mt-1">Latest Files</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="py-3 px-4 font-medium rounded-tl-lg">Status</th>
                <th className="py-3 px-4 font-medium rounded-tr-lg"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50">
                <td className="py-3 px-4">{content}</td>
                <td className="py-3 px-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;
};

export default LatestFileStatus;