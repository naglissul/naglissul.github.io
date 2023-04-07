import { BsMusicNoteBeamed } from "react-icons/bs";
function BestMusic() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BsMusicNoteBeamed style={{ padding: "0 1em", fontSize: "25px" }} />
      <h3>This week's music: Jean Sibelius - Etude Op. 76 No. 2</h3>
      <BsMusicNoteBeamed style={{ padding: "0 1em", fontSize: "25px" }} />
    </div>
  );
}

export default BestMusic;
