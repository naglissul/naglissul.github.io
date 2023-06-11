import { Routes, Route, HashRouter, Outlet } from "react-router-dom";
import { routes } from "./constants";
import NavHeader from "./generalComponents/NavHeader";
import TitleHeader from "./generalComponents/TitleHeader";
import NavRecent from "./generalComponents/NavRecent";
import NavTree from "./generalComponents/NavTree";
import Contacts from "./pages/homePage/components/Contacts";

interface RouteConfig {
  path: string;
  title: string;
  element: JSX.Element;
  routes?: Array<RouteConfig>;
}

const RenderRoutes = ({ route }: any): any => {
  return route.routes ? (
    <Route path={route.path} element={route.element}>
      {route.routes.map((route: RouteConfig, index: number) => (
        <RenderRoutes key={index} route={route} />
      ))}
    </Route>
  ) : (
    <Route path={route.path} element={route.element} />
  );
};

const PseudoRoute = ({ path, element }: any) => {
  return <Route path={path} element={element} />;
};

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
            <PseudoRoute path="/homey" element={<h1>Homey</h1>} />
            {/* {routes.map((route: RouteConfig, index: number) => (
              <RenderRoutes key={index} route={route} />
            ))} */}
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
