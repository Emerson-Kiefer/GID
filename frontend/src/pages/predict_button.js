// import React from "react";
import React, { useState } from "react"; //Source #4

const PredictButton = () => {
  // const [result, setResult] = useState([]);

  // async function handleClick() {
  //   console.log("Testing");
  //   // POST request using fetch with async/await
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       conversation: "blalhalab{-s-c-}balhadsf",
  //     }),
  //   };
  //   const response = await fetch(
  //     "http://127.0.0.1:8080/predict",
  //     requestOptions
  //   );
  //   const data = await response.json();
  //   setResult(data["pred"]);
  //   // setResult("hello");
  // }

  // return (
  //   <div className="predict">
  //     <p className="">Testing</p>
  //     <button onClick={handleClick}>Analyze Text</button>
  //     <p>{result}</p>
  //   </div>
  // );
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  function handleFileChange(event) {
    const fileList = event.target.files;
    const fileArray = [];

    for (let i = 0; i < fileList.length; i++) {
      fileArray.push(fileList[i]);
    }

    setFiles(fileArray);
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData();
  
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    const response = await fetch('http://127.0.0.1:8080/api/upload', {
      method: 'POST',
      body: formData,
    });

    // handle the server response
    if(response.ok) {
      const data = await response.json();
      setUploadedFiles(data.files);
    } else {
      console.error(response.statusText);
    }
  }

  function renderUploadedFiles(){
    return (
      <ul>
        {uploadedFiles.map((file) =>(
          <li key={file.name}>
            <h3>{file.name}</h3>
            <pre>{file.contents}</pre>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadedFiles.length > 0 && renderUploadedFiles()}
    </div>
  );
};

export default PredictButton;
