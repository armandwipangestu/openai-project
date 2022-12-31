import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faDownload } from "@fortawesome/free-solid-svg-icons";

const Modals = ({ onClose, visible, url, prompt }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  if (!visible) return null;

  const handleClick = () => {
    saveAs(url, prompt);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
        {!isMobile && (
          <div className="absolute right-0 top-12 flex flex-col mr-80">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3 border-2 border-black"
              style={{ boxShadow: "0.2rem 0.2rem 0 #222" }}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faDownload} />
            </button>
            <button
              onClick={onClose}
              type="button"
              className="focus:ring-4 focus:outline-none rounded-md text-sm font-medium px-5 py-2.5 focus:z-10 bg-red-600 text-white hover:bg-red-700 focus:ring-red-700 border-2 border-black"
              style={{ boxShadow: "0.2rem 0.2rem 0 #222" }}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        )}
        {isMobile && (
          <div className="absolute bottom-20 md:bottom-40 space-x-2 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3 border-2 border-black"
              style={{ boxShadow: "0.2rem 0.2rem 0 #000" }}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faDownload} />
            </button>
            <button
              onClick={onClose}
              type="button"
              className="focus:ring-4 focus:outline-none rounded-md text-sm font-medium px-5 py-2.5 focus:z-10 bg-red-600 text-white hover:bg-red-700 focus:ring-red-700 border-2 border-black"
              style={{ boxShadow: "0.2rem 0.2rem 0 #000" }}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        )}
        <img
          className="max-w-lg rounded-lg w-11/12 md:w-full border-2 border-black"
          src={url}
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        />
      </div>
    </>
  );
};

export default Modals;
