import { useState } from "react";

function JumperGame() {
  const [x, setX] = useState(100);
  const [y, setY] = useState(50);
  const [velY, setVelY] = useState(1);
  const [velX, setVelX] = useState(0);
  const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
  const gameloop = async () => {
    await delay(20);
    setY(y + velY);
    setX(x + velX);
    if (y < 290) {
      setVelY(velY + 1);
    }
    if (y > 290) {
      setY(290);
      setVelY(0);
    }
  };
  gameloop();
  return (
    <>
      <div>for now this game does nothing</div>
      <input
        type="text"
        value="Press here to play"
        readOnly
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            setX(x - 5);
          }
          if (event.key === "ArrowRight") {
            setX(x + 5);
          }
          if (event.key === " ") {
            setVelY(-10);
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
