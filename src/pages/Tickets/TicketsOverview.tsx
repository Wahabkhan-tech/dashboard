import React, { useState } from "react";
import Header from "./Header";

const TicketsOverview: React.FC = () => {
  const [tickets, setTickets] = useState(
    Array(10).fill({
      ticket: "Can't able to update File",
      user: "All",
      status: "Pending",
      date: "08 Oct 2024",
    })
  );

  const handleCreateNewTicket = () => {
    console.log("Create new ticket clicked");
    // Add logic for creating a new ticket (e.g., open a modal)
  };

  const handleSearch = (value: string) => {
    console.log("Search:", value);
    // Add filtering logic if needed
  };

  const handleStatusChange = (status: string) => {
    console.log("Status changed to:", status);
    // Add filtering logic if needed
  };

  return (
    <div className="w-full min-h-screen p-6">
      {/* Moved Heading above Header */}
      <h1 className="text-xl font-semibold text-gray-800 mb-6">Tickets Overview</h1>

      {/* Header */}
      <div className="mb-6 w-full">
        <Header
          onCreateNewTicket={handleCreateNewTicket}
          onSearch={handleSearch}
          onStatusChange={handleStatusChange}
        />
      </div>

      {/* Table with Background */}
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="py-3 px-4 font-medium rounded-tl-lg">Tickets</th>
                <th className="py-3 px-4 font-medium">User</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium rounded-tr-lg">Date</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{ticket.ticket}</td>
                  <td className="py-3 px-4">{ticket.user}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        ticket.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketsOverview;