const SupportTickets = () => {
  const userRole = JSON.parse(sessionStorage.getItem("konrix_user") || "{}")?.role || "Customer";

  const adminTicketsData = [
    { id: "1234", title: "Ticket #1234: File Upload Issue", priority: "High Priority" },
    { id: "1235", title: "Ticket #1235: Report Generation Error", priority: "Medium Priority" },
  ];

  const consultantTicketsData = [
    { id: "1236", title: "Client Query #1236", priority: "Medium Priority" },
    { id: "1237", title: "Support Request #1237", priority: "Low Priority" },
  ];

  const customerTicketsData = [
    { id: "ticket1", title: "Can’t able to upload file", date: "Just now", status: "Pending" },
  ];

  const ticketsData =
    userRole === "Admin"
      ? adminTicketsData
      : userRole === "Consultant"
      ? consultantTicketsData
      : customerTicketsData;

  return userRole === "Admin" || userRole === "Consultant" || userRole === "Customer" ? (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold text-black">Support Tickets</h2>
      <p className="text-sm text-black mt-1">Overview of your open support tickets</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="py-3 px-4 font-medium rounded-tl-lg">Ticket</th>
                {userRole === "Customer" ? (
                  <>
                    <th className="py-3 px-4 font-medium">Date</th>
                    <th className="py-3 px-4 font-medium rounded-tr-lg">Status</th>
                  </>
                ) : (
                  <th className="py-3 px-4 font-medium rounded-tr-lg">Priority</th>
                )}
              </tr>
            </thead>
            <tbody>
              {ticketsData.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{ticket.title}</td>
                  {userRole === "Admin" || userRole === "Consultant" ? (
                    <td className="py-3 px-4">
                      <button
                        className={`py-1 px-3 rounded-full text-xs font-medium transition-colors duration-200 ${
                          ticket.priority === "High Priority"
                            ? "bg-red-600 text-white"
                            : ticket.priority === "Medium Priority"
                            ? "bg-yellow-600 text-white"
                            : "bg-green-600 text-white"
                        }`}
                        disabled
                      >
                        {ticket.priority}
                      </button>
                    </td>
                  ) : (
                    <>
                      <td className="py-3 px-4">{ticket.date}</td>
                      <td className="py-3 px-4">
                        <button
                          className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-xs font-medium hover:bg-gray-300 transition-colors duration-200"
                          disabled
                        >
                          Pending
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-purple-600 text-white py-1 px-3 rounded-full text-xs font-medium hover:bg-purple-700 transition-colors duration-200">
          View All Tickets
        </button>
      </div>
    </div>
  ) : null;
};

export default SupportTickets;