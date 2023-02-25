import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div>
              <h1>No Point Writings</h1>
              <h5>
                <em>Blog. And more</em>
              </h5>
              <h2>MENU</h2>
              <ul>
                <li>
                  <h3>
                    <a href="/blog">Blog</a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="/contacts">Contacts</a>
                  </h3>
                </li>
              </ul>

              <br />
              <h3>
                <a href="https://www.nopointwritings.fun/">
                  Old website without ads
                </a>
              </h3>
              <h3>
                <a href="http://www.nopointwritings.wordpress.com/">
                  Even older website with ads
                </a>
              </h3>
              <footer>Naglis/Audrius 2023</footer>
            </div>
          }
        />
        <Route
          path="/blog"
          element={
            <div>
              <h1>Blog</h1>
              <br />
              <h2>MENU</h2>
              <ul>
                <li>
                  <h3>
                    <a href="/">Home</a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="/contacts">Contacts</a>
                  </h3>
                </li>
              </ul>
              <br />
              <h4>Post no. 1 - World's a mess</h4>
              ...here will be some text later
              <br />
              <br />
              <footer>Naglis/Audrius 2023</footer>
            </div>
          }
        />
        <Route
          path="/contacts"
          element={
            <div>
              <h1>Contacts</h1>
              <br />
              <h2>MENU</h2>
              <ul>
                <li>
                  <h3>
                    <a href="/">Home</a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="/blog">Blog</a>
                  </h3>
                </li>
              </ul>
              <br />
              <h5>email: naglis.suliokas@gmail.com</h5>
              <h5>ig: @naglisaudrius</h5>
              <h5>writing ig: @audriustyliunas</h5>
              <footer>Naglis/Audrius 2023</footer>
            </div>
          }
        />
        <Route path="/*" element={<div>This page doesn't exist</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
