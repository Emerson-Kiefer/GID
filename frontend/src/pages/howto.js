import React from "react";
import "./HowToPage.css"; // Import CSS for styling
import step1 from "./step1.jpg";
import step2 from "./step2.png";
import step3 from "./step3.jpg";
import imessage from "./imessage.png";
import messenger from "./messenger.png";
import whatsapp from "./whatsapp.png";
import discord from "./discord.png";

const HowToPage = () => {
  return (
    <div className="how-to-page">
      <h1 className="how-to-title">Welcome to GID!</h1>
      <p className="how-to-description">
        Here's a step-by-step guide on how to use our website:
      </p>
      <div className="step-container">
        <div className="step">
          <img src={step1} alt="Step 1" className="step-image" />
          <h2 className="step-title">Step 1</h2>
          <p className="step-description">
            Download your data into an acceptable format. GID can accept .txt
            only. Below is instructions on how to do so.
          </p>
        </div>
        <div className="step">
          <img src={step2} alt="Step 2" className="step-image" />
          <h2 className="step-title">Step 2</h2>
          <p className="step-description">
            Drap and Drop or click the chose file on the "Begin" page.
          </p>
        </div>
        <div className="step">
          <img src={step3} alt="Step 3" className="step-image" />
          <h2 className="step-title">Step 3</h2>
          <p className="step-description">
            Press "Analyze Text" and view your results.
          </p>
        </div>
      </div>
      <div className="how-to-description">
        <h2 className="step-title">How to download your messages:</h2>
        <img src={imessage} alt={imessage} className="step-image" />
        <p>
          <a
            href="https://appleinsider.com/inside/imessage/tips/how-to-save-imessage-conversations-as-a-pdf"
            className="my-link"
          >
            Click here for instructions to download IMessages
          </a>{" "}
        </p>
        <img src={messenger} alt={messenger} className="step-image" />
        <p>
          <a
            href="https://www.remote.tools/remote-work/download-facebook-messenger-conversation"
            className="my-link"
          >
            Click here for instructions to download Facebook Messenger messages
          </a>{" "}
        </p>
        <img src={whatsapp} alt={whatsapp} className="step-image" />
        <p>
          <a
            href="https://faq.whatsapp.com/1180414079177245/?cms_platform=android"
            className="my-link"
          >
            Click here for instructions to download WhatsApp messages (ensure
            you chose no media)
          </a>{" "}
        </p>
        <img src={discord} alt={discord} className="step-image" />
        <p>
          <a
            href="https://www.groovypost.com/howto/export-discord-chat-messages/"
            className="my-link"
          >
            Click here for instructions to download Discord messages
          </a>{" "}
        </p>
      </div>
      <div className="cta-container">
        <h2 className="cta-title">Ready to Get Started?</h2>
        <p className="cta-description">
          Click here to begin analyzing your file(s)!
        </p>
        <button className="cta-button">Begin</button>
      </div>
    </div>
  );
};

export default HowToPage;
