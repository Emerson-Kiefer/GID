import logo from "../assets/images/logo_full.png";
import "./App.css";
import "./onlineanalysis.css";
import React, { useState } from "react"; //Source #4
import FileUploadField from "../components/fileUploadField";
import AnalysisButton from "./chatpages/analysisButton";
import FileUploadDialog from "../components/fileUploadDialog";
import ChatDisplay from "./chatpages/chatdisplay";
import BeatLoader from "react-spinners/BeatLoader";

//I don't entirely understand what this does but I got it from following a tutorial.
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { maxWidth } from "@mui/system";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OnlineAnalysis = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState("none");
  const [messageIndex, setMessageIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [predPercent, setPredPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [percentArray, setPercentArray] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  const resetMessages = () => {
    setMessages([]);
    setMessageIndex(0);
    setPredPercent(0);
    setPercentArray([]);
    setChartLabels([]);
  };

  //   useEffect(() => {
  //     setMessages(["Hi bob", "hello Joe", "goodbye bob", "later joe"]);
  //   }, []);

  const addMessage = () => {
    if (uploadedFiles !== "none") {
      let online_info = uploadedFiles[0]["online_pred"];
      if (messageIndex < online_info.length) {
        // console.log(online_info[messageIndex]);
        const poster = online_info[messageIndex][0];
        const message = online_info[messageIndex][1];
        const percent = (online_info[messageIndex][2] * 100).toFixed();
        const poster_id = online_info[messageIndex][3];
        setMessages((prevState) => [
          ...prevState,
          [poster, message, percent, poster_id],
        ]);
        setPercentArray((prevState) => [...prevState, percent]);
        setChartLabels((prevState) => [...prevState, messageIndex]);
        setPredPercent(percent);
        setMessageIndex((prevstate) => prevstate + 1);
      }
    }
    // console.log(messages);
  };

  const labels = [...Array(percentArray.length).keys()];
  console.log(labels);
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Predicted Grooming After n messags",
      },
    },
    scales: {
      y: {
        max: 100,
        min: 0,
      },
      x: {
        type: "linear",
        max: labels.length,
        min: 0,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Messages",
        // data: [20, 20, 20, 30],
        data: percentArray,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        radius: 5,
        pointRadius: 5,
      },
    ],
  };
  const hoverValue = {
    id: "hoverValue",
    afterDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data, options } = chart;
      chart.getActiveElements().forEach((active) => {
        console.log("HOOVER");
        const value = data.datasets[active.datasetIndex].data[active.index];
        console.log(value);
      });
    },
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <logo-container>
          <header>
            <p>Please upload a file to begin for ~"online"~ analysis </p>
            <p>
              Then press 'analyze'. Once this is done, press 'next' to show each
              line of the file. The percentage will show how likely that
              grooming was detected in the previous lines.{" "}
            </p>
          </header>
        </logo-container>
        <div className="row">
          <FileUploadField
            files={files}
            setFiles={setFiles}
            className="file-upload"
          />
          <FileUploadDialog files={files} />
          <AnalysisButton
            files={files}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            setLoading={setLoading}
            resetMessages={resetMessages}
          />
          <div>{loading ? <BeatLoader color="red" /> : ""}</div>
        </div>
        <div className="row">
          <ChatDisplay messages={messages} />
          <Line
            options={options}
            data={data}
            plugins={[hoverValue]}
            style={{
              backgroundColor: "white",
              maxHeight: "450px",
              maxWidth: "600px",
              paddingRight: "10px",
            }}
          />
        </div>
        <div className="row">
          <button onClick={addMessage}>Next</button>
          <div className="row percent_box">
            <p style={{ color: "black" }}>Percentage:</p>
            <p
              className="percent_paragraph"
              style={{
                color: (() => {
                  if (predPercent < 30) return "green";
                  else if (predPercent < 60) return "orange";
                  else return "red";
                })(),
              }}
            >
              {predPercent + "%"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineAnalysis;
