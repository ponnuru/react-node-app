
import React,
{
    useState,
    useEffect
} from "react";

import axios
	from "axios";

// CreateStudent Component
const UploadButtonById = () => {
    const [uploadedFileName, setUploadedFileName] = useState(null);
    const [inputFile, setInputFile] = useState(null);
    useEffect(() => {
      setInputFile(document.getElementById("input-file"));
    }, []);
  
    const handleUpload = () => {
      inputFile?.click();
    };
    const handleDisplayFileDetails = () => {
      inputFile?.files && setUploadedFileName(inputFile.files[0].name);
    };

    const handleTableRender = async () => {
     
      console.log('Comign Soon.');
    };
    return (
      <div className="m-3">
        <label className="mx-3">Choose file: </label>
        <input
          id="input-file"
          onChange={handleDisplayFileDetails}
          className="d-none"
          type="file"
        />
        <button
          onClick={handleUpload}
          className={`btn btn-outline-${
            uploadedFileName ? "success" : "primary"
          }`}
        >
          {uploadedFileName ? uploadedFileName : "Upload"}
        </button>
        <button
          onClick={handleTableRender}
          className={'btn btn-outline-primary'}
        >
          RenderData
        </button>
      </div>
    );
};
const TableUpload = () => {
    console.log('CreateStudent');
    const [inputFile, setInputFile] = useState(null);
    useEffect(() => {
      setInputFile(document.getElementById("input-file"));
    }, []);
    const handleUpload = () => {
        inputFile?.click();
        console.log('Handle Upload...');
      };
    return (
        <>
         <h1>File TableUpload Place Holder..</h1>
         <UploadButtonById/>
        </>
    )
}

// Export CreateStudent Component
export default TableUpload
