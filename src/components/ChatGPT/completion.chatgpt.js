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
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateCompletion = async () => {
    setLoading(true);
    const res = await openai.createCompletion({
      prompt: prompt,
      model: "text-davinci-003",
      temperature: 0.9,
      max_tokens: 2048,
    });
    setLoading(false);
    setResult(res.data.choices[0].text);
  };

  const dummy = [
    {
      user: {
        image: "me.png",
        question: "Give me the best programming language at 2022!",
      },
      ai: {
        image: "openai-dark.png",
        answer:
          'It is not possible for me to accurately predict which programming language will be considered the "best" in 2022.',
      },
    },
    {
      user: {
        image: "me.png",
        question: "Give me 3 anime name",
      },
      ai: {
        image: "openai-dark.png",
        answer: "1. Attack on Titan, 2. Death Note, 3. One Piece",
      },
    },
    {
      user: {
        image: "me.png",
        question: "Give me 3 Animal Name",
      },
      ai: {
        image: "openai-dark.png",
        answer: "1. Cat, 2. Dog, 3. Lion",
      },
    },
    {
      user: {
        image: "me.png",
        question: "Give me the best programming language at 2022!",
      },
      ai: {
        image: "openai-dark.png",
        answer:
          'It is not possible for me to accurately predict which programming language will be considered the "best" in 2022.',
      },
    },
    {
      user: {
        image: "me.png",
        question: "Give me 3 anime name",
      },
      ai: {
        image: "openai-dark.png",
        answer: "1. Attack on Titan, 2. Death Note, 3. One Piece",
      },
    },
    {
      user: {
        image: "me.png",
        question: "Give me 3 Animal Name",
      },
      ai: {
        image: "openai-dark.png",
        answer: "1. Cat, 2. Dog, 3. Lion",
      },
    },
  ];

  return (
    <>
      <div className="mt-10">
        {dummy.map((d, i) => (
          <>
            <div
              className="flex p-5 rounded-lg mt-5 mb-5 bg-blue-300 border-2 border-black"
              style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
              key={i}
            >
              <img src={d.user.image} className="w-6 h-6 mr-3" />
              <div>
                <span className="text-black">{d.user.question}</span>
              </div>
            </div>
            <div
              className="flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black"
              style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
            >
              <img src={d.ai.image} className="w-6 h-6 mr-3" />
              <div>
                <span className="text-black">{d.ai.answer}</span>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="flex sticky bottom-14 md:bottom-5 w-full mb-10 md:mb-6">
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
        />
      </div>
    </>
  );
};

export default Completion;
