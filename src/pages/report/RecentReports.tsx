// pages/report/components/RecentReports.tsx
import React from "react";

const RecentReports: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Reports</h3>
      <table className="w-full text-sm text-gray-700">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-left">Report #</th>
            <th className="py-2 text-left">Date</th>
            <th className="py-2 text-left">Amount</th>
            <th className="py-2 text-left">Status</th>
            <th className="py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">VAT-01</td>
            <td className="py-2">07/20/24</td>
            <td className="py-2">$85.00</td>
            <td className="py-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                Pending
              </span>
            </td>
            <td className="py-2">
              <button className="text-purple-600 text-sm font-medium hover:underline">View Details</button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">VAT-02</td>
            <td className="py-2">07/20/24</td>
            <td className="py-2">$85.00</td>
            <td className="py-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                Pending
              </span>
            </td>
            <td className="py-2">
              <button className="text-purple-600 text-sm font-medium hover:underline">View Details</button>
            </td>
          </tr>
          <tr>
            <td className="py-2">VAT-03</td>
            <td className="py-2">07/20/24</td>
            <td className="py-2">$85.00</td>
            <td className="py-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                Pending
              </span>
            </td>
            <td className="py-2">
              <button className="text-purple-600 text-sm font-medium hover:underline">View Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentReports;