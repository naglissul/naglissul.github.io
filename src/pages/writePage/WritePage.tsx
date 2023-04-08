import { readingsSlam } from "../../constants";
import Reading from "./components/Reading";

function WritePage() {
  return (
    <>
      <h3 style={{ paddingTop: "5%", textAlign: "center" }}>
        <em>More coming soon...</em>
      </h3>
      <div>RadioVilnius (Blog most important)</div>
      <a
        href="https://radiovilnius.live/marija-kavtaradze-2/"
        rel="noreferrer"
        target="_blank"
      >
        01:10:46
      </a>

      <div>Blog newest</div>
      <div>ABOUT ME</div>
      <div>Sniegas: about, texts</div>

      <div>Slemai: about, texts</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
        {readingsSlam.map((reading) => (
          <Reading
            name={reading.name}
            src={`assets/readings/slam/${reading.fileName}`}
            date={reading.date}
            wordCount={reading.wordCount}
          />
        ))}
      </div>
      <div>Kiti tekstai: about, texts</div>
      <div>contacts</div>
    </>
  );
}

export default WritePage;
