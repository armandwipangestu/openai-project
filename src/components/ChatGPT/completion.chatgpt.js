import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";
import Information from "../Utilities/information";
import { Configuration, OpenAIApi } from "openai";

const Completion = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatLog, setChatLog] = useState([
    // {
    //   user: "gpt",
    //   message: "How can I help you Today?",
    //   avatar: "openai-dark.png",
    // },
    // {
    //   user: "me",
    //   message: "I want to use ChatGPT",
    //   avatar: "me.png",
    // },
  ]);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateCompletion = async () => {
    let chatLogNew = [...chatLog, { user: "me", message: prompt }];
    setChatLog(chatLogNew);
    setPrompt("");
    setLoading(true);
    const res = await openai.createCompletion({
      prompt: prompt,
      model: "text-davinci-003",
      temperature: 0.9,
      max_tokens: 2048,
    });
    setLoading(false);
    setChatLog([
      ...chatLogNew,
      { user: "gpt", message: `${res.data.choices[0].text}` },
    ]);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-start">
        <div className="">
          {chatLog.map((log, i) => (
            <>
              {log.user === "me" && (
                <div
                  className="flex p-5 rounded-lg mt-5 mb-5 bg-blue-300 border-2 border-black"
                  style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                  key={i}
                >
                  <img src="avatar.png" className="w-6 h-6 mr-3" />
                  <div>
                    <span className="text-black">{log.message}</span>
                  </div>
                </div>
              )}
              {log.user === "gpt" && (
                <div
                  className="flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black"
                  style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                >
                  <img src="openai-dark.png" className="w-6 h-6 mr-3" />
                  <div>
                    <span className="text-black">{log.message}</span>
                  </div>
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
                <div className="dot-container">
                  <span className="dot mr-2"></span>
                  <span className="dot mr-2"></span>
                  <span className="dot mr-2"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto flex sticky bottom-5">
          <div className="flex absolute bottom-0 right-0 pb-2 md:pb-2.5 mr-3">
            <button
              type="submit"
              className="items-end py-1 px-2 text-xs font-medium text-center text-black hover:bg-gray-700 rounded-lg"
              onClick={generateCompletion}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          <TextareaAutosize
            className="w-full border-2 border-black rounded-md placeholder-gray-500 resize-none py-2 pl-3 pr-10 md:pl-5 outline-none"
            placeholder="Enter your message here"
            style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
            maxRows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
      </div>

      {/* <div className="flex sticky bottom-14 md:bottom-5 w-full mb-10 md:mb-6"> */}
      {/* <div className="flex absolute bottom-14 md:bottom-5 md:w-9/12 mb-10 md:mb-6"> */}
      {/* <div className="flex absolute bottom-0 right-0 pb-2 md:pb-2.5 mr-3">
        <button
          type="submit"
          className="items-end py-1 px-2 text-xs font-medium text-center text-black hover:bg-gray-700 rounded-lg"
          onClick={generateCompletion}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div> */}
      {/* <TextareaAutosize
        className="w-full border-2 border-black rounded-md placeholder-gray-500 resize-none py-2 pl-3 pr-10 md:pl-5 outline-none"
        placeholder="Enter your message here"
        style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        maxRows={5}
        onChange={(e) => setPrompt(e.target.value)}
      /> */}
      {/* </div> */}
    </>
  );
};

export default Completion;
