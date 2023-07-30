import { readingsSlam } from "../../constants";
import Reading from "./components/Reading";

export default function SlamPage() {
  return (
    <section>
      <p>This page gonna contain all the info about slams.</p>
      <h1>Some texts</h1>
      <div
        style={{
          display: "flex",
          gap: "2em",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readingsSlam.map((reading) => (
          <Reading
            key={reading.name}
            name={reading.name}
            src={`assets/readings/slam/${reading.fileName}`}
          />
        ))}
      </div>
    </section>
  );
}
