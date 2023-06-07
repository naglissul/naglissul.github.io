import { useLocation } from "react-router-dom";
import { routes } from "../constants";
function TitleHeader() {
  const location = useLocation();
  return (
    <header>
      <h1 style={{ paddingTop: 0, textAlign: "center" }}>
        {routes.find((route) => route.path === location.pathname)?.title ??
          "404"}
      </h1>
      <hr />
    </header>
  );
}
export default TitleHeader;
