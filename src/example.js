import { useEffect, useState } from "react";
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

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(res.data.data[0].url);
  };

  return (
    <>
      <textarea onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={generateImage}>Generate Image</button>
      {result.length > 0 ? <img src={result} /> : <></>}
    </>
  );
};

export default App;
