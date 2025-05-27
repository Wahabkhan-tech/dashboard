// pages/boilling/Billings.tsx
import React from "react";
import CurrentPlan from "./CurrentPlan";
import Usage from "./Usage";
import FileUpload from "./FileUpload";
import UpgradePlan from "./UpgradePlan";
import PaymentDetails from "./PaymentDetails";

const Billings = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Main Content */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing Overview</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Current Plan, Usage, File Upload */}
        <div className="lg:col-span-2 space-y-6">
          <CurrentPlan />
          <Usage />
          <FileUpload />
        </div>

        {/* Right Section: Upgrade Plan, Payment Details */}
        <div className="space-y-6">
          <UpgradePlan />
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
};

export default Billings