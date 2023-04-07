import { routes } from "../constants";

function NavHeader() {
  return (
    <>
      <header
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          background: "white",
          height: "62px",
        }}
      >
        <div
          style={{
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
        </div>
        <hr style={{ margin: 0 }} />
      </header>
    </>
  );
}

export default NavHeader;
