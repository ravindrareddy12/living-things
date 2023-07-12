## File Uploader
    This is a React component that allows users to upload PDF files. It provides a user interface for selecting a PDF file, displaying its details, previewing the       file, and uploading it to a server.

# Installation
  To use this component in your React project, follow these steps:
  
  Copy the code of the FileUploader component.
  Create a new file in your project (e.g., FileUploader.js) and paste the copied code into it.
  Save the file.
## Usage
  Once you have the FileUploader component in your project, you can use it in other components as follows:

## jsx
    Copy code
    import React from 'react';
    import FileUploader from './FileUploader';
    
    const App = () => {
      return (
        <div>
          <h1>My App</h1>
          <FileUploader />
        </div>
      );
    };
    
    export default App;
    In the above example, the FileUploader component is imported and rendered within the App component.

## Functionality
    The FileUploader component provides the following functionality:
    
    Allows the user to select a PDF file using a file input field.
    Validates that the selected file is a PDF.
    Displays an error message if a non-PDF file is selected.
    Displays the selected file's details, such as the file path.
    Provides an upload button to initiate the file upload process.
    Simulates an API request/response for file uploading.
    Logs the file path and displays a success message when the upload is complete.
    Displays a PDF preview of the selected file.
    Customization
You can customize the component's appearance by modifying the CSS classes defined in the App.css file.
