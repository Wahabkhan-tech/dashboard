const AIInsights = () => {
  const userRole = JSON.parse(sessionStorage.getItem("konrix_user") || "{}")?.role || "Customer";

  const insightsData = {
    Admin: [
      { title: "Anomalies in Recent File" },
      { title: "Inconsistent Data Format" },
    ],
    Consultant: [
      { title: "Trends in Client Data" },
      { title: "Potential Optimization" },
    ],
  };

  return userRole === "Admin" || userRole === "Consultant" ? (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold text-black">AI Insights</h2>
      <p className="text-sm text-black mt-1">Actionable Insights on the base of Data</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="py-3 px-4 font-medium rounded-tl-lg">Insight</th>
                <th className="py-3 px-4 font-medium rounded-tr-lg"></th>
              </tr>
            </thead>
            <tbody>
              {insightsData[userRole].map((insight, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{insight.title}</td>
                  <td className="py-3 px-4"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;
};

export default AIInsights;