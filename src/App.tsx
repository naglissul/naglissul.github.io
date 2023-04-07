import { Routes, Route, HashRouter } from "react-router-dom";
import { routes } from "./constants";
import NavHeader from "./generalComponents/NavHeader";
import TitleHeader from "./generalComponents/TitleHeader";

function App() {
  return (
    <HashRouter>
      <NavHeader />
      <div style={{ margin: "62px 10% 0px" }}>
        <TitleHeader />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <footer style={{ position: "fixed", bottom: "2px", right: "2px" }}>
        <button
          onClick={() => {
            alert("haha, not yet. Dar nepadarytas vertimas :((");
          }}
        >
          Lietuviškai, prašyčiau
        </button>
      </footer>
    </HashRouter>
  );
}

export default App;
