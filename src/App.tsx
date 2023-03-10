import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import BlogPage from "./pages/blogPage/BlogPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import HomePage from "./pages/homePage/HomePage";
import JumperGame from "./pages/jumperGame/JumperGame";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route index element={<BlogPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/jumper" element={<JumperGame />} />
        <Route path="*" element={<div>This page doesn't exist</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
