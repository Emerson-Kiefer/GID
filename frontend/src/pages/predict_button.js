// import React from "react";
import React, { useState } from "react"; //Source #4

const PredictButton = () => {
  const [result, setResult] = useState([]);

  async function handleClick() {
    console.log("Testing");
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        conversation: "blalhalab{-s-c-}balhadsf",
      }),
    };
    const response = await fetch(
      "http://127.0.0.1:8080/predict",
      requestOptions
    );
    const data = await response.json();
    setResult(data["pred"]);
    // setResult("hello");
  }

  return (
    <div className="predict">
      <p className="">Testing</p>
      <button onClick={handleClick}>Analyze Text</button>
      <p>{result}</p>
    </div>
  );
};

export default PredictButton;
