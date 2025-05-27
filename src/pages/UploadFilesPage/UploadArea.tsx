import { Upload } from 'feather-icons-react';

const UploadArea = () => {
  return (
    <div className="mb-6">
      <div className="bg-white rounded-lg shadow-sm p-20 text-center border-2 border-dashed border-gray-300">
        <Upload className="w-8 h-8 text-gray-500 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">Drag & drop File Here</p>
        <p className="text-gray-500 text-sm">Or click to browse</p>
      </div>
      <div className="mt-4 text-center bg-white rounded-lg shadow-sm p-10 text-center border-gray-300">
        <p className="text-gray-600 font-semibold">Accept File Formats</p>
        <p className="text-gray-500 text-sm">PDF, CSV, Excel, Docs</p>
      </div>
    </div>
  );
};

export default UploadArea;