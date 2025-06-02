const BillingSummary = () => {
  const userRole = JSON.parse(sessionStorage.getItem("konrix_user") || "{}")?.role || "Customer";

  const billingData = {
    Admin: {
      plan: "Pro Tier",
      usage: "75% used",
      nextBilling: "Due: Jun 8, 2025",
    },
    Customer: {
      plan: "Basic Tier",
      usage: "50% used",
      nextBilling: "Due: Jun 15, 2025",
    },
  };

  const data = billingData[userRole] || billingData.Admin;

  return userRole === "Admin" || userRole === "Customer" ? (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold text-black">Billing Summary</h2>
      <p className="text-sm text-black mt-1">Your Current Plan and Usage Details</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="py-3 px-4 font-medium rounded-tl-lg">Detail</th>
                <th className="py-3 px-4 font-medium rounded-tr-lg">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50">
                <td className="py-3 px-4">Current Plan</td>
                <td className="py-3 px-4">{data.plan}</td>
              </tr>
              <tr className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50">
                <td className="py-3 px-4">Monthly Usage</td>
                <td className="py-3 px-4">{data.usage}</td>
              </tr>
              <tr className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50">
                <td className="py-3 px-4">Next Billing</td>
                <td className="py-3 px-4">{data.nextBilling}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-purple-600 text-white py-1 px-3 rounded-full text-xs font-medium hover:bg-purple-700 transition-colors duration-200">
          Manage Billing
        </button>
      </div>
    </div>
  ) : null;
};

export default BillingSummary;