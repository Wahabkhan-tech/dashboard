import { Upload, FileText, Info } from 'feather-icons-react';

const Tasks = () => {
  return (
    <>
      <div className="mb-6 flex justify-center w-full">
        <div className="flex-1 bg-white rounded-full px-4 py-2 mr-2">
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-600 whitespace-nowrap">Timeframe:</label>
            <select className="form-select form-select-sm bg-transparent border-0 text-gray-700 focus:ring-0">
              <option defaultChecked>All-time</option>
              <option value="1">Last 30 Days</option>
              <option value="2">This Month</option>
            </select>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-full px-4 py-2 mr-2">
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-600 whitespace-nowrap">Report Type:</label>
            <select className="form-select form-select-sm bg-transparent border-0 text-gray-700 focus:ring-0">
              <option defaultChecked>All</option>
              <option value="1">Summary</option>
              <option value="2">Detailed</option>
            </select>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-full px-4 py-2">
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-600 whitespace-nowrap">File Type:</label>
            <select className="form-select form-select-sm bg-transparent border-0 text-gray-700 focus:ring-0">
              <option defaultChecked>All</option>
              <option value="1">PDF</option>
              <option value="2">CSV</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="card p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 flex justify-center items-center rounded-full mr-4">
              <Upload className="text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold">86</h4>
              <p className="text-gray-600">File Uploaded (last 30 days)</p>
              <p className="text-green-600">+10% this month</p>
            </div>
          </div>
        </div>
        <div className="card p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 flex justify-center items-center rounded-full mr-4">
              <FileText className="text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold">48</h4>
              <p className="text-gray-600">Reports Generated (last 30 days)</p>
              <p className="text-green-600">14 new this month</p>
            </div>
          </div>
        </div>
        <div className="card p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 flex justify-center items-center rounded-full mr-4">
              <Info className="text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold">23</h4>
              <p className="text-gray-600">Pending Verifications</p>
              <p className="text-green-600">+20 this month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;