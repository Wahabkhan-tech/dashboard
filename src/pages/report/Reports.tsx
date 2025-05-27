// pages/report/Reports.tsx
import React from "react";
import ReportType from "./ReportType";
import VatTrend from "./VatTrend";
import RecentReports from "./RecentReports";
import FileUpload from "./FileUpload";

const Reports = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Main Content */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports</h2>

      <div className="space-y-6">
        <ReportType />
        <VatTrend />
        <RecentReports />
        <FileUpload />
      </div>
    </div>
  );
};

export default Reports;