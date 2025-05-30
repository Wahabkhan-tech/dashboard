import React from 'react';

const PendingTasks = () => {
  return (
    <div className="card p-6 bg-white rounded-lg shadow-sm h-64 flex flex-col">
      <h4 className="text-xl font-bold mb-3">Pending Tasks</h4>
      <p className="text-gray-600 mb-4 text-sm">Tasks Awaiting Action</p>
      <div className="flex-1 flex flex-col space-y-3">
        <button className="btn w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
          Review Document
        </button>
        <button className="btn w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200">
          Approve Request
        </button>
      </div>
    </div>
  );
};

export default PendingTasks;