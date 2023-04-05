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
        conversation:
          "what's up dadyo when did you get back on Twitter? Haha{-s_w-}like 2 weeks ago and it's going as terribly as I remember, but Deg is still{-s_w-}hilarious so it's ok{-s_w-}literally never about that account, love it.",
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
