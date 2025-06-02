import React from "react";

const RecentNotifications = () => {
  const userRole = JSON.parse(sessionStorage.getItem("konrix_user") || "{}")?.role || "Customer";

  const notificationsData = {
    Consultant: [
      { message: "New Message Received" },
      { message: "Backup Completed" },
    ],
  };

  return userRole === "Consultant" ? (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold text-black">Recent Notifications</h2>
      <p className="text-sm text-black mt-1">Latest Updates</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="py-3 px-4 font-medium rounded-tl-lg">Notification</th>
                <th className="py-3 px-4 font-medium rounded-tr-lg"></th>
              </tr>
            </thead>
            <tbody>
              {notificationsData.Consultant.map((notification, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{notification.message}</td>
                  <td className="py-3 px-4">
                    <button className="bg-purple-600 text-white py-1 px-3 rounded-full text-xs font-medium hover:bg-purple-700 transition-colors duration-200">
                      View
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

export default RecentNotifications;