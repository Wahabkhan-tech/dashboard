const QuickActions = () => {
  const userRole = JSON.parse(sessionStorage.getItem("konrix_user") || "{}")?.role || "Customer";

  const actionsData = {
    Admin: [
      { action: "Initiate File Upload" },
      { action: "Generate New Report" },
      { action: "View Latest Report" },
    ],
  };

  return userRole === "Admin" ? (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold text-black">Quick Actions</h2>
      <p className="text-sm text-black mt-1">Performs Common task Quickly</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="py-3 px-4 font-medium rounded-tl-lg">Action</th>
                <th className="py-3 px-4 font-medium rounded-tr-lg"></th>
              </tr>
            </thead>
            <tbody>
              {actionsData.Admin.map((action, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{action.action}</td>
                  <td className="py-3 px-4">
                    <button className="bg-purple-600 text-white py-1 px-3 rounded-full text-xs font-medium hover:bg-purple-700 transition-colors duration-200">
                      Perform
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;
};

export default QuickActions;