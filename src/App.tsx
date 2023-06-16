import { Routes, Route, HashRouter } from "react-router-dom";
import { routes } from "./constants";
import NavHeader from "./generalComponents/NavHeader";
import TitleHeader from "./generalComponents/TitleHeader";
import NavTree from "./generalComponents/NavTree";
import ContactsFooter from "./generalComponents/ContactsFooter";

function App() {
  return (
    <HashRouter>
      <NavHeader routes={routes} />
      <div style={{ margin: "30px 10% 0 10%" }}>
        <TitleHeader />
        <main>
          <aside>
            <NavTree routes={routes} />
          </aside>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <aside></aside>
        </main>

        <ContactsFooter />
      </div>
    </HashRouter>
  );
}

export default App;
