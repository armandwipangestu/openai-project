import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  // useEffect(() => {
  //   generateImage();
  // }, []);

  const openai = new OpenAIApi(configuration);

  // const generateImage = async () => {
  //   const res = await openai.createImage({
  //     prompt: prompt,
  //     n: 1,
  //     size: "1024x1024",
  //   });
  //   // setResult(res.data.data[0].url);
  //   // console.log(res.data);
  // };

  const generateCompletion = async () => {
    const res = await openai.createCompletion({
      prompt: prompt,
      model: "text-davinci-003",
      temperature: 0.6,
      max_tokens: 2048,
    });
    setResult(res.data.choices[0].text);
    console.log(res.data);
  };

  return (
    <>
      {/* <textarea onChange={(e) => setPrompt(e.target.value)} /> */}
      {/* <button onClick={generateImage}>Generate Image</button> */}
      {/* {result.length > 0 ? <img src={result} /> : <></>} */}

      {/* <button onClick={generateCompletion}>Generate Completion</button> */}
      {/* {result.length > 0 ? <i>{result}</i> : <></>} */}

      <div className="m-5 p-5 relative">
        <label className="block mb-2 text-sm font-medium text-white">
          Give AI Question
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="absolute right-3 mt-5">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={generateCompletion}
          >
            Send
          </button>
        </div>
      </div>

      {result.length > 0 ? (
        <div className="m-5 p-5">
          <label className="block mb-2 text-sm font-medium text-white">
            Result
          </label>
          <blockquote className="mt-5 p-4 my-4 bg-gray-400 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-base font-medium leading-relaxed text-gray-900 dark:text-white">
              {result}
            </p>
          </blockquote>
        </div>
      ) : (
        <></>
      )}

      {/* <form>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form> */}
    </>
  );
};

export default App;
