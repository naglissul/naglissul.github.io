import { useNavigate } from "react-router-dom";
function NavHeader() {
  const navigate = useNavigate();
  return (
    <>
      <nav
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
      >
        <div style={{ width: "100px" }}>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
        <div style={{ width: "100px" }}>
          <button
            onClick={() => {
              navigate("/blog");
            }}
          >
            Blog
          </button>
        </div>
        <div style={{ width: "100px" }}>
          <button
            onClick={() => {
              navigate("/code");
            }}
          >
            Code
          </button>
        </div>
        <div style={{ width: "100px" }}>
          <details style={{ backgroundColor: "wheat" }}>
            <summary>Write</summary>
            <ul>
              <li>
                <button
                  onClick={() => {
                    navigate("/write");
                  }}
                >
                  Fiction
                </button>
              </li>
              <li>Other</li>
            </ul>
          </details>
        </div>
        <div style={{ width: "100px" }}>
          <details style={{ backgroundColor: "wheat" }}>
            <summary>Teach</summary>
            <ul>
              <li>School</li>
              <li>Korep</li>
              <li>
                <button
                  onClick={() => {
                    navigate("/teach");
                  }}
                >
                  Konsp
                </button>
              </li>
              <li>MGBI</li>
            </ul>
          </details>
        </div>
        <div style={{ width: "100px" }}>
          <details style={{ backgroundColor: "wheat" }}>
            <summary>Music</summary>
            <ul>
              <li>Listen</li>
              <li>Piano</li>
              <li>Compose</li>
            </ul>
          </details>
        </div>
      </nav>
    </>
  );
}

export default NavHeader;
