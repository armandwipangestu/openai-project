import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const lists = [
    {
      question: "What can this website do?",
      li: false,
      answer:
        "This website allows us to communicate with AI created by the OpenAI organization",
    },
    {
      question: "What can AI do on this website?",
      li: true,
      answer: [
        { list_answer: "ChatGPT - Interacts with AI in a conversational way." },
        {
          list_answer:
            "Dall·E 2 - Create original, realistic images and art from a text description",
        },
      ],
    },
    {
      question: "What technology is used on this website?",
      li: false,
      answer: "This website is built using ReactJS, Tailwind CSS, OpenAI API",
    },
    {
      question: "How to Get API Key?",
      answer:
        "You must first register on the openai website, then click the profile menu and select View API keys",
    },
  ];

  return (
    <>
      <div className="p-2">
        {lists.map((list, index) => (
          <div key={index} className="mb-10">
            <h1 className="text-white text-base md:text-2xl">
              <FontAwesomeIcon
                icon={faPaperclip}
                className="mr-3 text-gray-400"
              />
              {list.question}
            </h1>
            <div className="mt-3 text-gray-400 text-sm md:text-lg">
              {!list.li ? (
                <>
                  <span>{list.answer}</span>
                </>
              ) : (
                <>
                  <ul style={{ listStyleType: "circle" }}>
                    {list.answer.map((ans, index) => (
                      <li key={index}>{ans.list_answer}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="p-2">
        <div>
          <h1 className="text-white text-xl md:text-2xl">
            What can this website do?
          </h1>
          <div className="mt-3">
            <span className="text-gray-400">
              This website allows us to communicate with AI created by the
              OpenAI organization
            </span>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-white text-xl md:text-2xl">
            What can AI do on this website?
          </h1>
          <div className="mt-3 text-gray-400">
            <ul style={{ listStyleType: "circle" }}>
              <li>ChatGPT - Interacts with AI in a conversational way.</li>
              <li>
                Dall·E 2 - Create original, realistic images and art from a text
                description
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-white text-xl md:text-2xl">
            What technology is used on this website?
          </h1>
          <div className="mt-3">
            <span className="text-gray-400">
              This website is built using ReactJS, Tailwind CSS, OpenAI API
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FAQ;
