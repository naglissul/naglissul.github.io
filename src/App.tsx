import { Routes, Route, HashRouter, Outlet } from "react-router-dom";
import { routes } from "./constants";
import NavHeader from "./generalComponents/NavHeader";
import TitleHeader from "./generalComponents/TitleHeader";
import NavRecent from "./generalComponents/NavRecent";
import NavTree from "./generalComponents/NavTree";
import Contacts from "./pages/homePage/components/Contacts";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <HashRouter>
      <NavHeader routes={routes} />
      <div style={{ margin: "30px 10% 0 10%" }}>
        <TitleHeader />
        <main>
          <aside>
            <NavTree />
          </aside>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <aside>
            <NavRecent />
          </aside>
        </main>
        <footer>
          <Contacts />
          <p>Naglis/Audrius 2023</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
