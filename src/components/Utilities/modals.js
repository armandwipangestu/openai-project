import React from "react";
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faDownload } from "@fortawesome/free-solid-svg-icons";

const Modals = ({ onClose, visible, url, prompt }) => {
  if (!visible) return null;

  const handleClick = () => {
    saveAs(url, prompt);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center">
        <img className="max-w-lg rounded-lg w-full" src={url} />
        <div className="absolute bottom-20 md:bottom-40 space-x-2 rounded-b dark:border-gray-600">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <button
            onClick={onClose}
            type="button"
            className="focus:ring-4 focus:outline-none rounded-xl border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-600 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-700"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modals;
