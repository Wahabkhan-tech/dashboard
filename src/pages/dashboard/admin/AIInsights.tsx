const AIInsights = () => {
  return (
    <div className="card p-6 bg-white rounded-lg shadow-sm h-64 flex flex-col">
      <h4 className="text-xl font-bold mb-4">AI Insights</h4>
      <p className="text-gray-600 mb-6">Actionable Insights on the base of Data</p>
      <div className="flex-1 flex flex-col justify-between">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-gray-800">Anomalies in Recent File</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-800">Inconsistent Data Format</p>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;