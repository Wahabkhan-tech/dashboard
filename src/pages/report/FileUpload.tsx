// pages/report/components/FileUpload.tsx
import React, { useState } from "react";

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Upload File</h3>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-600 file:text-white hover:file:bg-purple-700 transition duration-200"
      />
      {files.length > 0 && (
        <ul className="mt-3 space-y-1">
          {files.map((file, index) => (
            <li key={index} className="text-gray-600 text-sm truncate">
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;