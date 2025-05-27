// pages/report/ReportType.tsx
import React from "react";
import { Download } from "feather-icons-react";
import graphPlaceholder from "../../assets/images/image-removebg-preview.png"; // Adjust path if needed

const ReportType: React.FC = () => {
  return (
    <>
      {/* Filters + Download Button */}
      <div className="mb-6 flex justify-between items-center gap-4">
        <div className="w-1/4 bg-white rounded-full px-4 py-2 flex items-center">
          <div className="flex justify-between items-center w-full">
            <label className="text-sm text-gray-600 whitespace-nowrap">Timeframe:</label>
            <select className="form-select form-select-sm bg-transparent border-0 text-gray-700 focus:ring-0 w-full">
              <option defaultChecked>All-time</option>
              <option value="1">Last 30 Days</option>
              <option value="2">This Month</option>
            </select>
          </div>
        </div>
        <div className="w-1/4 bg-white rounded-full px-4 py-2 flex items-center">
          <div className="flex justify-between items-center w-full">
            <label className="text-sm text-gray-600 whitespace-nowrap">Report Type:</label>
            <select className="form-select form-select-sm bg-transparent border-0 text-gray-700 focus:ring-0 w-full">
              <option defaultChecked>All</option>
              <option value="1">Summary</option>
              <option value="2">Detailed</option>
            </select>
          </div>
        </div>
        <div className="w-1/4 bg-white rounded-full px-4 py-2 flex items-center">
          <div className="flex justify-between items-center w-full">
            <label className="text-sm text-gray-600 whitespace-nowrap">File Type:</label>
            <select className="form-select form-select-sm bg-transparent border-0 text-gray-700 focus:ring-0 w-full">
              <option defaultChecked>All</option>
              <option value="1">PDF</option>
              <option value="2">CSV</option>
            </select>
          </div>
        </div>
        <button className="w-1/4 bg-purple-600 text-white px-4 py-2 h-11 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-purple-700 transition duration-200">
          <Download size={16} /> Download Reports
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-600">Total Owned</h3>
            <h2 className="text-2xl font-bold mt-1">$130,000</h2>
            <p className="text-xs text-gray-500">Total owned VAT<br />Last 30 Days</p>
          </div>
          <img src={graphPlaceholder} alt="Graph" className="w-40 h-30 object-contain" />
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-600">Total Reclaimed</h3>
            <h2 className="text-2xl font-bold mt-1">$56,000</h2>
            <p className="text-xs text-gray-500">Total reclaimed VAT<br />Last 30 Days</p>
          </div>
          <img src={graphPlaceholder} alt="Graph" className="w-40 h-30 object-contain" />
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-600">Net Position</h3>
            <h2 className="text-2xl font-bold mt-1">$70,000</h2>
            <p className="text-xs text-gray-500">Net VAT Position<br />Last 30 Days</p>
          </div>
          <img src={graphPlaceholder} alt="Graph" className="w-40 h-30 object-contain" />
        </div>
      </div>
    </>
  );
};

export default ReportType;