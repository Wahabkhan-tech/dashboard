// pages/boilling/components/Usage.tsx
import React from "react";

const Usage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Pro Tier</h3>
      <p className="text-gray-600 text-sm mb-2">Monthly Usage</p>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
        <div className="bg-purple-600 h-3 rounded-full transition-all duration-300" style={{ width: "75%" }}></div>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600 text-sm">75%</p>
        <p className="text-gray-600 text-sm">Next billing: 8 Oct, 2024</p>
      </div>
    </div>
  );
};

export default Usage;