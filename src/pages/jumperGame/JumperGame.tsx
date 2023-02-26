import { useState } from "react";

function JumperGame() {
  const [x, setX] = useState(100);
  const [y, setY] = useState(50);
  return (
    <>
      <div>for now this game does nothing</div>
      <input
        type="text"
        value="Press here to play"
        readOnly
        onKeyDown={(event) => {
          if (event.key === "ArrowUp") {
            setY(y - 5);
          }
          if (event.key === "ArrowDown") {
            setY(y + 5);
          }
          if (event.key === "ArrowLeft") {
            setX(x - 5);
          }
          if (event.key === "ArrowRight") {
            setX(x + 5);
          }
        }}
      />
      <div
        style={{
          backgroundColor: "blue",
          width: "10px",
          height: "10px",
          position: "absolute",
          top: `${y}px`,
          left: `${x}px`,
        }}
      />
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "3px",
          position: "absolute",
          top: "300px",
        }}
      />
    </>
  );
}

export default JumperGame;
