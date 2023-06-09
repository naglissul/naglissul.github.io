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
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
