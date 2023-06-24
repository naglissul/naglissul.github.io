import { FaMusic } from "react-icons/fa";

interface music {
  name: string;
}

function BestMusic({ name }: music) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px 0 10px 0",
      }}
    >
      <FaMusic />
      <em>This week's music: {name} </em>
      <FaMusic />
    </div>
  );
}

export default BestMusic;
