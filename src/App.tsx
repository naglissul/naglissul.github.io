import { Routes, Route, HashRouter } from "react-router-dom";
import { routes } from "./constants";
import NavHeader from "./generalComponents/NavHeader";
import TitleHeader from "./generalComponents/TitleHeader";

function App() {
  return (
    <HashRouter>
      <NavHeader
        style={{
          top: "0",
          left: "0",
          right: "0",
          background: "#ececec",
          height: "60px",
          borderBottom: "1px solid #9a9a9a",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: "30px",
        }}
      />
      <div style={{ margin: "30px 10% 0 10%" }}>
        <TitleHeader />
        <main>
          <aside>
            <h1>Tree:</h1>

            <NavHeader />
          </aside>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
          <aside>
            <h1>Your recent:</h1>
            <NavHeader />
          </aside>
        </main>
        <footer>
          {" "}
          <h1>Footer (same with contacts)</h1>Naglis/Audrius 2023
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
