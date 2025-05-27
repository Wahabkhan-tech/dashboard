// pages/boilling/components/PaymentDetails.tsx
import React from "react";

const PaymentDetails: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Billing Overview</h3>
      <p className="text-gray-600 text-sm mb-3">Your saved Payment Details</p>
      <div className="flex items-center mb-4">
        <i className="feather-credit-card text-gray-700 mr-2"></i>
        <span className="text-gray-700 text-sm">Visa MasterCard</span>
      </div>
      <button className="text-purple-600 text-sm font-medium hover:underline">
        Manage your Card
      </button>
    </div>
  );
};

export default PaymentDetails;