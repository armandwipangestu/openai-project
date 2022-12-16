import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faImage,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    { title: "ChatGPT", link: "/", icon: "faMessage" },
    { title: "Dall-E", link: "/dall-e", icon: "faImage" },
  ];

  const handleIcon = (icon) => {
    switch (icon) {
      case "faMessage":
        return faMessage;
      case "faImage":
        return faImage;
      default:
        return "";
    }
  };

  return (
    <div
      className={` ${
        open ? "w-44 md:w-72" : "w-12 md:w-16"
      } duration-300 sidebar bg-dark h-screen sticky top-0`}
    >
      <div className="flex items-center">
        <img
          src="openai-light.png"
          alt="OpenAI Logo"
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          } w-8 h-8 ml-1.5 mt-8 md:ml-3 md:mt-7`}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <a
          href="/"
          className={`text-gray-300 origin-left font-medium text-2xl duration-200 ml-1.5 mt-8 md:mt-7 ${
            !open && "scale-0"
          }`}
        >
          <h1 style={{ font: "charter" }}>OpenAI</h1>
        </a>
      </div>
      <ul className="pt-6">
        {menus.map((menu, index) => (
          <a href={menu.link} key={index}>
            <li
              className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:text-gray-500 text-sm items-center gap-x-4`}
            >
              <FontAwesomeIcon
                icon={handleIcon(menu.icon)}
                className={`text-base ml-1.5 md:text-lg md:ml-2.5`}
              />
              <span
                className={`${!open && "scale-0"} origin-left duration-200`}
              >
                {menu.title}
              </span>
            </li>
          </a>
        ))}
      </ul>
      <div
        class="px-5 mb-8 md:mb-5 rounded-lg bottom-0 absolute text-gray-300"
        role="alert"
      >
        <FontAwesomeIcon
          icon={faInfoCircle}
          className={`text-base mr-2 md:text-lg md:mr-6 ${
            open && "hidden"
          } cursor-pointer`}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div
          className={`${open && "bg-dark-2"} ${!open && "hidden"} px-4 py-4`}
        >
          <div class={`flex items-center mb-3 ${!open && "hidden"}`}>
            <span class="bg-red-300 text-red-800 text-xs md:text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
              Attention
            </span>
            <button
              type="button"
              class="ml-auto -mx-1.5 -my-1.5 bg-neutral-900 text-white rounded-lg focus:ring-2 focus:ring-gray-200 p-1 hover:bg-neutral-700 inline-flex h-6 w-6"
              data-collapse-toggle="dropdown-cta"
              aria-label="Close"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span class="sr-only">Close</span>
              <svg
                aria-hidden="true"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class={`${!open && "hidden"}`}>
            <p class={`mb-3 text-xs md:text-sm`}>
              Please don't share any sensitive information in your
              conversations.
            </p>
            <a
              class="text-xs md:text-sm underline"
              href="https://openai.com/blog/chatgpt/"
            >
              More information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
