import React, { useState } from 'react';
import './App.css';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(URL.createObjectURL(file));
      setError('');
    } else {
      setSelectedFile(null);
      setError('Please select a PDF file.');
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploadStatus('Uploading...');
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Simulate API request/response
      setTimeout(() => {
        // Replace this with your actual API call
        // Here, we're just logging the file path and a success message
        console.log('File path:', selectedFile);
        setUploadStatus('Upload successful!');
      }, 2000);
    } else {
      setError('Please select a PDF file.');
    }
  };



  return (
    <div className="container">
      <h2 className="heading">Upload an e-bill PDF</h2>
      <div className="fileInput">
        <input type="file" accept="application/pdf" className="fileLabel" onChange={handleFileChange} />
        <span style={{marginLeft: '20px', color: 'red'}}>Choose PDF</span></div>
      {error && <div className="error">{error}</div>}
      {selectedFile && (
        <div className="fileInfo">
          <h4>Selected File:</h4>
          <p>{selectedFile}</p>
          <button className="uploadButton" onClick={handleUpload}>Upload</button>
        </div>
      )}
      {uploadStatus && <div className="status">{uploadStatus}</div>}
      {selectedFile && !uploadStatus && (
        <div className="pdfPreview">
          <h4>PDF Preview:</h4>
          <iframe
            src={selectedFile}
            title="PDF Preview"
            className="iframe"
            width="100%"
            height="500px"
          />
        </div>
      )}
    </div>
  );
  
};

export default FileUploader;
