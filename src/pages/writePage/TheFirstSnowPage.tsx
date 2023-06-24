import { readingsSnow } from "../../constants";
import Reading from "./components/Reading";

export default function TheFirstSnowPage() {
  return (
    <section>
      Čia bus patalpinta informacija apie romaną "Pirmasis sniegas"
      {/* <p>Snow. EXCERPTS ONLY (cuz Alma littera competition 2024 April)</p>
      {readingsSnow.map((reading) => (
        <Reading
          key={reading.name}
          name={reading.name}
          src={`assets/readings/sniegas/${reading.fileName}`}
          date={reading.date}
          wordCount={reading.wordCount}
        />
      ))}
      <h1>This gonna be a page for the book called "Pirmasis sniegas"</h1>
      <ul>
        <li>Cover</li>
        <li>Sypnosis</li>
        <li>Bio?</li>
        <li>Excerpts & sample chapters</li>
        <li>Reviews & testimonials</li>
        <li>How to get info</li>
        <li>Media kit</li>
      </ul> */}
    </section>
  );
}
