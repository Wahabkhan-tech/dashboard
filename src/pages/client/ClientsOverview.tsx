import React, { useState } from "react";
import Header from "./Header";
import { PageBreadcrumb } from "../../components";

const ClientsOverview: React.FC = () => {
  const [clients, setClients] = useState(
    Array(10).fill({
      client: "Janaki Constructions",
      lastActivity: "Report Generated",
      status: "Pending",
      date: "08 Oct 2024",
    })
  );

  const handleCreateNewClient = () => {
    console.log("Create new client clicked");
    // Add logic for creating a new client (e.g., open a modal)
  };

  const handleSearch = (value: string) => {
    console.log("Search:", value);
    // Add filtering logic if needed
    const filteredClients = clients.filter((client) =>
      client.client.toLowerCase().includes(value.toLowerCase())
    );
    setClients(filteredClients.length ? filteredClients : clients);
  };

  const handleStatusChange = (status: string) => {
    console.log("Status changed to:", status);
    // Add filtering logic if needed
    if (status === "All") {
      setClients(
        Array(10).fill({
          client: "Janaki Constructions",
          lastActivity: "Report Generated",
          status: "Pending",
          date: "08 Oct 2024",
        })
      );
    } else {
      const filteredClients = clients.filter((client) => client.status === status);
      setClients(filteredClients.length ? filteredClients : clients);
    }
  };

  return (
    <>
      <PageBreadcrumb
        title="Clients"
        name="Clients"
        breadCrumbItems={["Emirates", "Menu", "Clients"]}
      />
      <div className="w-full min-h-screen p-6">
        {/* Heading */}
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Clients Overview</h1>

        {/* Header */}
        <div className="mb-6 w-full">
          <Header
            onCreateNewTicket={handleCreateNewClient}
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
                  <th className="py-3 px-4 font-medium rounded-tl-lg">Client</th>
                  <th className="py-3 px-4 font-medium">Last Activity</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium rounded-tr-lg">Date</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">{client.client}</td>
                    <td className="py-3 px-4">{client.lastActivity}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          client.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{client.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsOverview;