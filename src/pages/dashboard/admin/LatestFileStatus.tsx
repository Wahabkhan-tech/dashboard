import React from 'react';

const LatestFileStatus = () => {
  return (
    <div className="card p-6 bg-white rounded-lg shadow-sm h-64 flex flex-col">
      <h4 className="text-xl font-bold mb-3">Latest File Status</h4>
      <p className="text-gray-600 mb-4 text-sm">Latest Files</p>
      <div className="flex-1 bg-gray-100 flex flex-col justify-center items-center">
        <p className="text-black text-sm">No Files Uploaded Recently</p>
      </div>
    </div>
  );
};

export default LatestFileStatus;