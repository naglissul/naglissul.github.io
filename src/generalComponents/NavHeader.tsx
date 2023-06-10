import { useNavigate } from "react-router-dom";
function NavHeader({ style }: any) {
  const navigate = useNavigate();
  return (
    <nav style={style}>
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
          <summary>
            <button
              onClick={() => {
                navigate("/write");
              }}
            >
              Write
            </button>
          </summary>
          <ul>
            <li>Fiction</li>
            <li>Other</li>
          </ul>
        </details>
      </div>
      <div style={{ width: "100px" }}>
        <details style={{ backgroundColor: "wheat" }}>
          <summary>
            <button
              onClick={() => {
                navigate("/teach");
              }}
            >
              Teach
            </button>
          </summary>
          <ul>
            <li>School</li>
            <li>Korep</li>
            <li>Konsp</li>
            <li>MGBI</li>
          </ul>
        </details>
      </div>
      <div style={{ width: "100px" }}>
        <details style={{ backgroundColor: "wheat" }}>
          <summary>
            <button
              onClick={() => {
                navigate("/music");
              }}
            >
              Music
            </button>
          </summary>
          <ul>
            <li>Listen</li>
            <li>Piano</li>
            <li>Compose</li>
          </ul>
        </details>
      </div>
    </nav>
  );
}

export default NavHeader;
