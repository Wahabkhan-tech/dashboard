// pages/boilling/components/UpgradePlan.tsx
import React from "react";

const UpgradePlan: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Need more Capacity?</h3>
      <p className="text-sm mb-4 leading-relaxed">
        Unlock advanced features and higher limits with our Pro tiers designed for business.
      </p>
      <button className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition duration-200">
        Explore Plans
      </button>
    </div>
  );
};

export default UpgradePlan;