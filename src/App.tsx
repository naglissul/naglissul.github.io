import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import BlogPage from "./pages/blogPage/BlogPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<div>This page doesn't exist</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
