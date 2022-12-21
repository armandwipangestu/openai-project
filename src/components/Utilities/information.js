import React from "react";

const Information = ({ link }) => {
  return (
    <>
      <div
        id="alert-additional-content-1"
        className="p-4 mb-4 border border-blue-300 rounded-lg bg-blue-300"
        role="alert"
      >
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 text-blue-900"
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
          <h3 className="text-lg font-medium text-blue-900">Information</h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-blue-900">
          Because my API Key has reached the limit, the input form is disabled,
          to see how this works I have provided the video below
        </div>
      </div>
      <video className="w-full max-w-full h-auto" controls>
        <source src={link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Information;
