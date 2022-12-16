import React, { useState, useEffect } from "react";
import Axios from "axios";

const About = () => {
  //   const [repository, setRepository] = useState([]);
  //   const fetchRepository = () => {
  //     const repositoryAPI =
  //       "https://api.github.com/repos/armandwipangestu/openai-project";

  //     Axios({
  //       method: "GET",
  //       url: repositoryAPI,
  //     })
  //       .then((result) => {
  //         setRepository(result.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   useEffect(() => {
  //     fetchRepository();
  //   }, []);

  return (
    <>
      <div className="p-2">
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
      </div>

      {/* <div className="px-5 mb-8 md:mb-5 rounded-lg bottom-0 absolute">
        {repository.forEach((repo) => {
          <h1>{repo.stargazers_count}</h1>;
        })}
      </div> */}
    </>
  );
};

export default About;
