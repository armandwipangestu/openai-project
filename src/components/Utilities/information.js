import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <>
      <div
        id="alert-additional-content-1"
        className="p-4 mb-4 mt-5 border-2 border-black rounded-lg bg-blue-300"
        style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        role="alert"
      >
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 text-dark"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium text-black">Information</h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-black">
          Because my API Key has reached the limit, the input form is disabled,
          if you want to try it please read{" "}
          <a
            href="https://github.com/armandwipangestu/openai-project#running-on-localhost"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            this
          </a>
          , also check this{" "}
          <a
            href="https://github.com/armandwipangestu/openai-project#information"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            video
          </a>{" "}
          to enable input form, button, etc. To see how this is work, check out
          this{" "}
          <Link to="/demo" className="underline">
            demo
          </Link>
        </div>
      </div>
    </>
  );
};

export default Information;
