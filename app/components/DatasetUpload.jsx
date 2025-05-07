"use client";
import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

export default function DatasetUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    
    setUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      setUploadStatus('success');
      // Reset after a few seconds
      setTimeout(() => {
        setFile(null);
        setUploadStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div 
          className={`max-w-lg border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {!file ? (
            <>
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-700 font-medium mb-1">Drag and drop your dataset file here</p>
              <p className="text-sm text-gray-500 mb-4">Supports JSON, JSONL, CSV files</p>
              <div>
                <label htmlFor="file-upload" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                  Select file
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".json,.jsonl,.csv"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </>
          ) : (
            <div className="w-full">
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Upload className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-3 truncate">
                    <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <div>
                  <button 
                    type="button" 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => setFile(null)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              
              {uploadStatus === 'success' ? (
                <div className="mt-4 flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Upload complete!</span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={uploading}
                  className={`mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    uploading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {uploading ? 'Uploading...' : 'Upload Dataset'}
                </button>
              )}
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-blue-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Dataset Requirements</h3>
              <div className="mt-2 text-sm text-blue-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>JSON and JSONL files should follow the instruction/response format.</li>
                  <li>CSV files should have columns for input and expected output.</li>
                  <li>Maximum file size: 100MB</li>
                  <li>For best results, include at least 1,000 examples.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}