import React, { useState } from "react";
import "./chatbot.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleChatbot = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="chatbot-wrapper">
      <div className={`iframe-container ${isVisible ? "visible" : ""}`}>
        <button className="close-button" onClick={toggleChatbot}>
        <FontAwesomeIcon icon={faClose} className="icon"/>
        </button>
        <iframe
          src="https://app.relevanceai.com/form/bcbe5a/99411144-2d25-424c-af8d-1222a61e6c69?version=latest"
          width="500px"
          height="750px"
          frameborder="0"
        ></iframe>
      </div>
      {!isVisible && (
        <button className="open-button" onClick={toggleChatbot}>
          Chat with us
        </button>
      )}
    </div>
  );
};

export default Chatbot;
