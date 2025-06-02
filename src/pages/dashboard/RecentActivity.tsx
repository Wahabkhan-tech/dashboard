const RecentActivity = () => {
  const userRole = JSON.parse(sessionStorage.getItem("konrix_user") || "{}")?.role || "Customer";

  const heading = userRole === "Customer" ? "File Processing Activity" : "Recent Activity";

  const adminActivityData = [
    { file: "File Uploaded: ProjectX.pdf", timespan: "2 hrs ago" },
    { file: "Report Generated: MonthlySummary", timespan: "1 day ago" },
  ];

  const customerActivityData = [
    { file: "Jaffar VAT Report", action: "Upload File", timespan: "20min", status: "Pending" },
    { file: "Jaffar VAT Report", action: "Generate Reports", timespan: "7hr", status: "Pending" },
    { file: "Jaffar VAT Report", action: "Delete File", timespan: "10min", status: "Completed" },
  ];

  const activityData = userRole === "Admin" ? adminActivityData : customerActivityData;

  return userRole === "Admin" || userRole === "Customer" ? (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold text-black">{heading}</h2>
      <p className="text-sm text-black mt-1">Latest actions performed in your account</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="py-3 px-4 font-medium rounded-tl-lg">File</th>
                {userRole === "Customer" && (
                  <th className="py-3 px-4 font-medium">Action</th>
                )}
                <th className="py-3 px-4 font-medium">Timespan</th>
                {userRole === "Customer" && (
                  <th className="py-3 px-4 font-medium rounded-tr-lg">Status</th>
                )}
                {userRole === "Admin" && (
                  <th className="py-3 px-4 font-medium rounded-tr-lg"></th>
                )}
              </tr>
            </thead>
            <tbody>
              {activityData.map((activity, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{activity.file}</td>
                  {userRole === "Customer" && (
                    <td className="py-3 px-4">{activity.action}</td>
                  )}
                  <td className="py-3 px-4">{activity.timespan}</td>
                  {userRole === "Customer" && (
                    <td className="py-3 px-4">
                      <button
                        className={`py-1 px-3 rounded-full text-xs font-medium transition-colors duration-200 ${
                          activity.status === "Completed"
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                        disabled
                      >
                        {activity.status}
                      </button>
                    </td>
                  )}
                  {userRole === "Admin" && <td className="py-3 px-4"></td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;
};

export default RecentActivity;