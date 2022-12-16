import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faImage } from "@fortawesome/free-solid-svg-icons";

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
      } relative duration-300 sidebar`}
    >
      <div className="flex items-center">
        <img
          src="openai.png"
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
          className={`text-black origin-left font-medium text-2xl duration-200 ml-1.5 mt-8 md:mt-7 ${
            !open && "scale-0"
          }`}
        >
          <h1>OpenAI</h1>
        </a>
      </div>
      <ul className="pt-6">
        {menus.map((menu, index) => (
          <a href={menu.link}>
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-gray-700 hover:text-black text-sm items-center gap-x-4`}
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
    </div>
  );
};

export default Sidebar;
