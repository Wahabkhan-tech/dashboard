import UploadArea from './UploadArea';
import UploadHistoryTable from './UploadHistoryTable';

const UploadFilesPage = () => {
  return (
    <div className="p-6  min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Upload Files</h2>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 flex items-center">
          <span>Upload File</span>
        </button>
      </div>
      <UploadArea />
      <UploadHistoryTable />
    </div>
  );
};

export default UploadFilesPage;