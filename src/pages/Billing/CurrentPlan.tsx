// pages/boilling/components/CurrentPlan.tsx
import React from "react";

const CurrentPlan: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Current Plan: Pro Tier</h3>
      <p className="text-3xl font-bold text-purple-600 mb-3">$89/Month</p>
      <p className="text-gray-600 text-sm mb-4">
        Unlimited File Uploads • 150+ Reports/Monthly • Advanced Analysis
      </p>
      <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition duration-200">
        Upgrade Plan
      </button>
    </div>
  );
};

export default CurrentPlan;