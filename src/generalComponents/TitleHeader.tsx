import { useLocation, useNavigate } from "react-router-dom";
import { MOBILE_THRESHOLD, routes } from "../constants";
import { AiOutlineArrowLeft } from "react-icons/ai";
function TitleHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header>
      <button
        style={{
          position: "relative",
          left: `${window.innerWidth > MOBILE_THRESHOLD ? "20%" : "auto"}`,
          marginTop: "20px",
        }}
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft />
      </button>
      <h1 style={{ paddingTop: 0, textAlign: "center", margin: "0 0 20px 0" }}>
        {routes.find((route) => route.path === location.pathname)?.title ??
          "404"}
      </h1>
      <hr />
    </header>
  );
}
export default TitleHeader;
