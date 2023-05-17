import { Routes, Route, HashRouter } from "react-router-dom";
import { routes } from "./constants";
import NavHeader from "./generalComponents/NavHeader";
import TitleHeader from "./generalComponents/TitleHeader";
import { useState } from "react";

function App() {
  const [isEn, setIsEn] = useState(true);
  return (
    <HashRouter>
      <NavHeader />
      <div style={{ margin: "62px 10% 0px" }}>
        <TitleHeader />
        <Routes>
          {routes.map((route) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
          <Route
            path="/treasurehunt"
            element={<h1>This gonna be a page for treasurehunt</h1>}
          />
        </Routes>
      </div>
      <footer style={{ position: "fixed", bottom: "2px", right: "2px" }}>
        <button
          onClick={() => {
            setIsEn(!isEn);
          }}
        >
          {isEn ? "Lietuviškai, prašyčiau" : "English, please"}
        </button>
      </footer>
    </HashRouter>
  );
}

export default App;
