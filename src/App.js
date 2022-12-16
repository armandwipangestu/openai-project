import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatgpt from "./components/ChatGPT/main.chatgpt";
import Dalle from "./components/Dall-E/main.dalle";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navbar.layouts";
import Sidebar from "./components/Layouts/sidebar.layouts";

const App = () => {
  return (
    <MainLayouts>
      <BrowserRouter>
        <div className="flex">
          <Sidebar className="bg-green-500" />
          <main className="p-7 flex-1 h-screen bg-white">
            <Routes>
              <Route path="/" element={<Chatgpt />} />
              <Route path="/dall-e" element={<Dalle />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </MainLayouts>
  );
};

export default App;
