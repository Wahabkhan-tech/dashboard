const SupportTickets = () => {
  return (
    <div className="card p-6 bg-white rounded-lg shadow-sm h-64 flex flex-col">
      <h4 className="text-xl font-bold mb-3">Support Tickets</h4>
      <p className="text-gray-600 mb-4 text-sm">Overview of your open support tickets</p>
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-800">Ticket #1234: File Upload Issue</p>
            <span className="text-sm text-red-600">High Priority</span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-800">Ticket #1235: Report Generation Error</p>
            <span className="text-sm text-yellow-600">Medium Priority</span>
          </div>
        </div>
       <div className="flex justify-center">
  <button className="btn w-40 flex-row justify-center bg-gray-200 text-gray-800 py-2 rounded-lg mt-2 hover:bg-gray-300 transition-colors duration-200">
    View All Tickets
  </button>
</div>

      </div>
    </div>
  );
};

export default SupportTickets;