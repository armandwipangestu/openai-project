import React, { useState } from "react";
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
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    let chatLogNew = [...chatLog, { user: "me", message: prompt }];
    setChatLog(chatLogNew);
    setPrompt("");
    setLoading(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 10,
      size: "1024x1024",
    });
    setLoading(false);
    setChatLog([...chatLogNew, { user: "dall-e", message: res.data.data }]);
    // setResult(res.data.data);
  };

  // const dummy = [
  //   {
  //     user: "me",
  //     message: "Hanya percobaan",
  //   },
  //   {
  //     user: "dall-e",
  //     message: [
  //       {
  //         url: "me.png",
  //       },
  //       {
  //         url: "me.png",
  //       },
  //       {
  //         url: "me.png",
  //       },
  //     ],
  //   },
  //   {
  //     user: "me",
  //     message: "Hanya percobaan 2",
  //   },
  //   {
  //     user: "dall-e",
  //     message: [
  //       {
  //         url: "avatar.png",
  //       },
  //       {
  //         url: "avatar.png",
  //       },
  //       {
  //         url: "avatar.png",
  //       },
  //       {
  //         url: "avatar.png",
  //       },
  //       {
  //         url: "avatar.png",
  //       },
  //     ],
  //   },
  // ];

  // dummy.map((data) => {
  //   if (data.user === "dall-e") {
  //     data.message.map((d) => {
  //       console.log(d.url);
  //     });
  //   }
  // });

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
                // d.message.map((res) => {
                //   console.log(res.url);
                // })
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {d.message.map((res, i) => {
                    // console.log(index);
                    // console.log(chatLog);
                    // console.log(d.message);
                    // console.log(res);
                    // console.log(res[0]);
                    // console.log(res[0].url);
                    // setIndex(index + 1);
                    return (
                      <React.Fragment key={i}>
                        <img
                          className="max-w-lg rounded-lg w-full h-48"
                          src={res.url}
                          alt={`${i}`}
                        />
                      </React.Fragment>
                    );
                  })}
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
                <img src="openai-dark.png" className="w-6 h-6 mr-3" />
                <div class="col-3">
                  <div class="snippet" data-title="dot-pulse">
                    <div class="stage">
                      <div class="dot-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-auto flex flex-col sticky bottom-5 justify-start align-start">
          <div className="mb-2 text-gray-600 text-xs md:text-sm">
            Start with a detailed description
            <button
              className="ml-1 border-2 border-black px-2.5 py-1 rounded-md text-black hover:text-white hover:bg-black text-xs"
              style={{ boxShadow: "0.2rem 0.2rem 0 #222" }}
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
            autoFocus
          />
        </div>
      </div>
    </>
  );
};

export default Image;
