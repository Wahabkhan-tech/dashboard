const BillingSummary = () => {
  return (
    <div className="card p-6 bg-white rounded-lg shadow-sm h-64 flex flex-col">
      <h4 className="text-xl font-bold mb-4">Billing Summary</h4>
      <p className="text-gray-600 mb-6">Your Current Plan and Usage Details:</p>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="mb-2"><strong>Current Plan:</strong> Pro Tier</p>
          <p className="mb-2"><strong>Monthly Usage:</strong> 75% used</p>
          <p className="mb-2"><strong>Next Billing:</strong> Due: Jun 8, 2025</p>
        </div>
        <button className="btn w-full bg-gray-200 text-gray-800 py-2 rounded-lg">Manage Billing</button>
      </div>
    </div>
  );
};

export default BillingSummary;