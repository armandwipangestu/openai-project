import React from "react";
import Image from "./image.dalle";

const Dalle = (props) => {
  return (
    <React.Fragment>
      <div className="mt-2 text-center">
        <h1 className="font-medium underline underline-offset-8 text-white">
          OpenAI - {props.title}
        </h1>
        <p className="text-xs mt-3 text-white">{props.description}</p>
      </div>
      <Image />
    </React.Fragment>
  );
};

export default Dalle;
