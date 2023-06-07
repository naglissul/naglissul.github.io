import { Routes, Route, HashRouter } from "react-router-dom";
import { routes } from "./constants";
import NavHeader from "./generalComponents/NavHeader";
import TitleHeader from "./generalComponents/TitleHeader";

function App() {
  return (
    <HashRouter>
      <NavHeader />
      <div style={{ margin: "30px 10% 0 10%" }}>
        <TitleHeader />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route
            path="/treasurehunt"
            element={
              <h1 style={{ paddingTop: "4em", textAlign: "center" }}>
                This gonna be a page for permanent treasurehunt in NL and LT
              </h1>
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
