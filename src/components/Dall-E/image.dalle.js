import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";
import Modals from "../Utilities/modals";
import Information from "../Utilities/information";
import { Configuration, OpenAIApi } from "openai";

const Image = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState();
  const [chatLog, setChatLog] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState(null);
  const handleOnClose = () => setShowModal(false);
  const listEndRef = useRef(null);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    let chatLogNew = [...chatLog, { user: "me", message: prompt }];
    setChatLog(chatLogNew);
    setPrompt("");
    setLoading(true);
    window.document.body.scrollIntoView({ behavior: "smooth", block: "end" });
    // listEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    const res = await openai.createImage({
      prompt: prompt,
      n: 10,
      size: "1024x1024",
    });
    setLoading(false);
    setChatLog([...chatLogNew, { user: "dall-e", message: res.data.data }]);
  };

  const generateSurprise = () => {
    const arr = [
      "3D render of a cute tropical fish in an aquarium on a dark blue background, digital art",
      "synthwave sports car",
      "a stained glass window depicting a robot",
      "an oil painting by Matisse of a humanoid robot playing chess",
      "a painting of a fox in the style of Starry Night",
      "teddy bears shopping for groceries in Japan, ukiyo-e",
      "an expressive oil painting of a basketball player dunking, depicted as an explosion of a nebula",
      "a fortune-telling shiba inu reading your fate in a giant hamburger, digital art",
      "a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers",
      "panda mad scientist mixing sparkling chemicals, digital art",
      "crayon drawing of several cute colorful monsters with ice cream cone bodies on dark blue paper",
      "3D render of a small pink balloon dog in a light pink room",
      "an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background", //13
      "a cat submarine chimera, digital art",
      "a bowl of soup that is also a portal to another dimension, digital art",
      "photograph of an astronaut riding a horse",
      "a pencil and watercolor drawing of a bright city in the future with flying cars",
      "a stained glass window depicting a hamburger and french fries",
      "a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art",
      "an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background",
      "An astronaut riding a horse in a photorealistic style",
      "Teddy bears mixing sparkling chemicals as mad scientists as a 1990s Saturday morning cartoon",
      "A bowl of soup that is a portal to another dimension as digital art",
      "Teddy bears shopping for groceries in the style of ukiyo-e",
      "An astronaut lounging in a tropical resort in space in a in a vaporwave style",
      "An astronaut playing basketball with cats in space as a children's book illustration",
    ];

    const randomIndex = Math.floor(Math.random() * arr.length);

    const randomElement = arr[randomIndex];
    setPrompt(randomElement);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-start">
        <div className="">
          {chatLog.map((d, i) => (
            <>
              {d.user === "me" && (
                <div
                  className="flex p-5 rounded-lg mt-5 mb-5 bg-blue-300 border-2 border-black"
                  style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                  key={i}
                >
                  <img src="avatar.png" className="w-6 h-6 mr-3" />
                  <div>
                    <span className="text-black">{d.message}</span>
                  </div>
                </div>
              )}
              {d.user === "dall-e" && (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-5">
                  {d.message.map((res, i) => {
                    return (
                      <React.Fragment key={i}>
                        <button
                          onClick={() => {
                            setShowModal(true);
                            setModalUrl(res.url);
                          }}
                        >
                          <img
                            className="max-w-lg rounded-sm w-full h-48 md:hover:h-44 border-2 border-black"
                            style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                            src={res.url}
                            alt={`${i}`}
                          />
                        </button>
                      </React.Fragment>
                    );
                  })}
                  <Modals
                    onClose={handleOnClose}
                    visible={showModal}
                    url={modalUrl}
                    name={prompt}
                  />
                </div>
              )}
            </>
          ))}
          {loading && (
            <div className="relative">
              <div
                className="flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black"
                style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
              >
                <img
                  src="openai-dark.png"
                  className="w-6 h-6 mr-3 rounded-lg"
                />
                <div className="col-3">
                  <div className="snippet" data-title="dot-pulse">
                    <div className="stage">
                      <div className="dot-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <div ref={listEndRef}></div> */}
        {!showModal && (
          <div className="mt-auto flex flex-col sticky bottom-5 justify-start align-start">
            <div className="mb-2 text-gray-600 text-xs md:text-sm">
              Start with a detailed description
              <button
                className="ml-1 border-2 border-black px-2.5 py-1 rounded-md text-black bg-green-400 hover:bg-green-500 text-xs"
                style={{ boxShadow: "0.2rem 0.2rem 0 #222" }}
                onClick={generateSurprise}
              >
                Surprise me
              </button>
            </div>
            <div
              className={`flex absolute bottom-0 right-0 md:pb-2.5 px-4 py-2.5 rounded-tr-md rounded-br-md ${
                prompt && "bg-black text-white px-4 py-2.5"
              }`}
            >
              <button
                className={`${!prompt && "cursor-not-allowed"}`}
                type="submit"
                onClick={generateImage}
              >
                Generate
              </button>
            </div>
            <TextareaAutosize
              className="w-full border-2 border-black rounded-md placeholder-gray-500 resize-none py-2 pl-3 pr-10 md:pl-5 outline-none"
              placeholder="Enter your message here"
              style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
              maxRows={5}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              // autoFocus
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Image;
