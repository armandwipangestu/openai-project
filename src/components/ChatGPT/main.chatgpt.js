import React from "react";
import Completion from "./completion.chatgpt";

const Chatgpt = (props) => {
  return (
    <React.Fragment>
      <div className="mt-2 text-center">
        <h1 className="font-medium underline underline-offset-8 text-white">
          OpenAI - {props.title}
        </h1>
        <p className="text-xs mt-3 text-white">{props.description}</p>
      </div>
      <Completion />
    </React.Fragment>
  );
};

export default Chatgpt;
