import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatgpt from "./components/ChatGPT/main.chatgpt";
import Dalle from "./components/Dall-E/main.dalle";
import MainLayouts from "./components/Layouts/main.layouts";
import Sidebar from "./components/Layouts/sidebar.layouts";
import Octocat from "./components/Utilities/octocat";

const App = () => {
  return (
    <MainLayouts>
      <BrowserRouter>
        <Octocat />
        <div className="flex">
          <Sidebar />
          <main className="p-7 flex-1 bg-dark">
            <Routes>
              <Route
                path="/"
                element={
                  <Chatgpt
                    title="ChatGPT"
                    description="Interacts with AI in a conversational way."
                  />
                }
              />
              <Route
                path="/dall-e"
                element={
                  <Dalle
                    title="Dall·E 2"
                    description="Create original, realistic images and art from a text description"
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </MainLayouts>
  );
};

export default App;
