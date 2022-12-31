import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faImages,
  faInfoCircle,
  faQuestionCircle,
  faHouse,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(null);
  const [attention, setAttention] = useState(true);
  const menus = [
    { title: "Home", link: "/", icon: "faHouse" },
    { title: "ChatGPT", link: "/chatgpt", icon: "faMessage" },
    { title: "Dall·E", link: "/dall-e", icon: "faImages" },
    { title: "FAQs", link: "/question", icon: "faQuestionCircle" },
    { title: "Demo", link: "/demo", icon: "faVideo" },
  ];

  const handleIcon = (icon) => {
    switch (icon) {
      case "faMessage":
        return faMessage;
      case "faImages":
        return faImages;
      case "faQuestionCircle":
        return faQuestionCircle;
      case "faHouse":
        return faHouse;
      case "faVideo":
        return faVideo;
      default:
        return "";
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    // setIsMobile(mediaQuery.matches);
    setOpen(!mediaQuery.matches);

    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div
      className={`${
        open ? "w-44 md:w-72" : "w-12 md:w-16"
      } border-r-2 border-black h-screen sticky top-0`}
    >
      <div className={`flex items-center`}>
        <img
          src="openai-dark.png"
          alt="OpenAI Logo"
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          } w-6 h-6 ml-3 mt-8 md:ml-4 md:mt-7 md:hover:rotate-[360deg]`}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div
          className={`text-black origin-left font-medium text-2xl duration-200 ml-1.5 mt-8 md:mt-7 ${
            !open && "scale-0"
          }`}
        >
          <h1 style={{ font: "charter" }}>OpenAI</h1>
        </div>
      </div>
      <ul className="pt-6">
        {menus.map((menu, index) => (
          <NavLink
            to={menu.link}
            style={({ isActive }) => ({
              color: isActive ? "#000" : "#696969",
            })}
            key={index}
          >
            <li
              className={`flex rounded-md py-3 md:py-4 px-2 cursor-pointer md:hover:bg-gray-500/10
               text-sm items-center gap-x-4`}
            >
              <FontAwesomeIcon
                icon={handleIcon(menu.icon)}
                className={`text-base ml-1.5 md:text-lg md:ml-2.5`}
              />
              <span
                className={`${
                  !open && "scale-0"
                } origin-left duration-200 md:text-lg`}
              >
                {menu.title}
              </span>
            </li>
          </NavLink>
        ))}
      </ul>
      <div
        className="px-3.5 md:px-5 mb-8 md:mb-5 rounded-lg md:bottom-0 bottom-10 absolute text-gray-600"
        role="alert"
      >
        <FontAwesomeIcon
          icon={faInfoCircle}
          className={`text-base md:text-lg md:mr-6 text-black ${
            open && "hidden"
          } cursor-pointer ${!attention ? "hidden" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div
          className={`${open && "border-2 border-black"} ${
            !open && "hidden"
          } px-4 py-4 rounded-lg ${!attention ? "hidden" : ""}`}
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        >
          <div className={`flex items-center mb-3 ${!open && "hidden"}`}>
            <span
              className={`border-2 border-black bg-red-400 text-black text-xs md:text-sm font-semibold mr-2 px-2.5 py-0.5 rounded`}
              style={{ boxShadow: "0.2rem 0.2rem 0 #222" }}
            >
              Attention
            </span>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 border-2 rounded-md border-black text-black focus:ring-2 focus:ring-gray-200 p-0.5 inline-flex h-6 w-6 hover:bg-red-400"
              style={{ boxShadow: "0.2rem 0.2rem 0 #222" }}
              data-collapse-toggle="dropdown-cta"
              aria-label="Close"
              onClick={() => {
                setAttention(!attention);
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                aria-hidden="true"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`${!open && "hidden"}`}>
            <p className={`mb-3 text-xs md:text-sm`}>
              Please don't share any sensitive information in your
              conversations.
            </p>
            <a
              className="text-xs md:text-sm underline"
              href="https://openai.com/blog/chatgpt/"
              target="_blank"
              rel="noreferrer"
            >
              More information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
