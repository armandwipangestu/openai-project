import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faBars,
  faXmark,
  faMessage,
  faImage,
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
    }
  };

  return (
    <div
      className={` ${
        open ? "w-44 md:w-72" : "w-12 md:w-16"
      } relative duration-300 sidebar`}
    >
      {/* {open ? (
        <>
          <FontAwesomeIcon
            icon={faXmark}
            className={`cursor-pointer absolute -right-10 top-8 md:top-7 w-7 text-4xl text-black`}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faBars}
            className={`cursor-pointer absolute -right-10 top-8 md:top-7 w-7 text-4xl text-black`}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </>
      )} */}
      <div className="flex items-center">
        <img
          src="openai.png"
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
    // <div
    //   className={`${
    //     open ? "w-44 md:w-72" : "w-12 md:w-16"
    //   } duration-700 h-screen relative bg-green-600`}
    // >
    //   {open ? (
    //     <>
    //       <FontAwesomeIcon
    //         icon={faXmark}
    //         className={`cursor-pointer absolute -right-3 top-3.5 md:top-3.5 w-7 text-4xl text-black`}
    //         onClick={() => {
    //           setOpen(!open);
    //         }}
    //       />
    //     </>
    //   ) : (
    //     <>
    //       <FontAwesomeIcon
    //         icon={faBars}
    //         className={`cursor-pointer absolute -right-10 top-3.5 md:top-3.5 w-7 text-4xl text-black`}
    //         onClick={() => {
    //           setOpen(!open);
    //         }}
    //       />
    //     </>
    //   )}
    //   <div className="flex gap-x-4 items-center">
    //     <div className="px-2 py-4 md:p-4 flex">
    //       <img
    //         src="openai.png"
    //         className="cursor-pointer duration-500 w-8 h-8"
    //       />
    //       <h1
    //         className={`text-dark origin-left font-medium font-xl text-2xl duration-500 ml-2 ${
    //           !open && "scale-0"
    //         }`}
    //       >
    //         OpenAI
    //       </h1>
    //     </div>
    //     <ul>
    //       {menus.map((menu, i) => {
    //         return <li key={i}>{menu.title}</li>;
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Sidebar;
