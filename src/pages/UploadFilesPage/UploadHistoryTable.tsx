const uploadHistory = [
  { id: 'VAT-01', period: 'Q1/2024', date: 'Oct 8, 2024', status: 'Pending' },
  { id: 'VAT-01', period: 'Q1/2024', date: 'Oct 7, 2024', status: 'Pending' },
  { id: 'VAT-01', period: 'Q1/2024', date: 'Oct 6, 2024', status: 'Pending' },
  { id: 'VAT-01', period: 'Q1/2024', date: 'Oct 5, 2024', status: 'Pending' },
];

const UploadHistoryTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 p-4 border-b">Upload History</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              <th className="p-4">ID</th>
              <th className="p-4">Period</th>
              <th className="p-4">Uploaded Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {uploadHistory.map((item, index) => (
              <tr key={index} className="border-b text-gray-700 text-sm">
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.period}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4">
                  <span className="text-yellow-600">{item.status}</span>
                </td>
                <td className="p-4">
                  <button className="text-purple-500 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadHistoryTable;