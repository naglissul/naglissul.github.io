import { routes } from "../constants";

function NavHeader() {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          background: "#ececec",
          height: "62px",
          borderBottom: "1px solid #9a9a9a",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {routes.map(
          (route) =>
            route.name !== "NotFound" && (
              <h3>
                <a href={`/#${route.path}`}>{route.name}</a>
              </h3>
            )
        )}
      </nav>
    </>
  );
}

export default NavHeader;
