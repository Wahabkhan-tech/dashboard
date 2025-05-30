const RecentActivity = () => {
  return (
    <div className="card p-6 bg-white rounded-lg shadow-sm h-64 flex flex-col">
      <h4 className="text-xl font-bold mb-3">Recent Activity</h4>
      <p className="text-gray-600 mb-4 text-sm">Latest actions performed in your account</p>
      <div className="flex-1 flex flex-col space-y-3">
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-800">File Uploaded: ProjectX.pdf</p>
          <span className="text-sm text-gray-600">2 hrs ago</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-800">Report Generated: MonthlySummary</p>
          <span className="text-sm text-gray-600">1 day ago</span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;