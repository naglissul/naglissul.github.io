import { Routes, Route, HashRouter } from "react-router-dom";
import { routes } from "./constants";
import NavHeader from "./generalComponents/NavHeader";

function App() {
  return (
    <HashRouter>
      <NavHeader />
      <div style={{ marginTop: "62px" }}>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <footer style={{ position: "fixed", bottom: "2px", right: "2px" }}>
        {" "}
        <button
          onClick={() => {
            alert("haha, not yet. Dar nepadarytas vertimas :((");
          }}
        >
          Lietuviškai prašyčiau
        </button>
      </footer>
    </HashRouter>
  );
}

export default App;
