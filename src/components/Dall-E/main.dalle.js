import React from "react";
import Image from "./image.dalle";

const Dalle = (props) => {
  return (
    <React.Fragment>
      <div className="mt-2 text-center">
        <h1 className="font-medium text-sm md:text-xl underline underline-offset-8 text-black">
          OpenAI - {props.title}
        </h1>
        <p className="text-xs md:text-base mt-3 text-black">
          {props.description}
        </p>
      </div>
      <Image />
    </React.Fragment>
  );
};

export default Dalle;
