import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatgpt from "./components/ChatGPT/main.chatgpt";
import Dalle from "./components/Dall-E/main.dalle";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navbar.layouts";

const App = () => {
  return (
    <MainLayouts>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Chatgpt />} />
          <Route path="/dall-e" element={<Dalle />} />
        </Routes>
      </BrowserRouter>
    </MainLayouts>
  );
};

export default App;
