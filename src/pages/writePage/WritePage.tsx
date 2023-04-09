import { readingsOther, readingsSlam, readingsSnow } from "../../constants";
import Contacts from "../homePage/components/Contacts";
import Reading from "./components/Reading";
import WritingCategory from "./components/WritingCategory";

function WritePage() {
  return (
    <>
      <main>
        <aside></aside>
        <section>
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
          <WritingCategory name="Snow" />
          <div
            style={{
              display: "flex",
              gap: "2em",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readingsSnow.map((reading) => (
              <Reading
                name={reading.name}
                src={`assets/readings/snow/${reading.fileName}`}
                date={reading.date}
                wordCount={reading.wordCount}
              />
            ))}
          </div>
          <WritingCategory name="Slam" />
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
                name={reading.name}
                src={`assets/readings/slam/${reading.fileName}`}
                date={reading.date}
                wordCount={reading.wordCount}
              />
            ))}
          </div>
          <WritingCategory name="Other" />
          <div
            style={{
              display: "flex",
              gap: "2em",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {readingsOther.map((reading) => (
              <Reading
                name={reading.name}
                src={`assets/readings/other/${reading.fileName}`}
                date={reading.date}
                wordCount={reading.wordCount}
              />
            ))}
          </div>
        </section>

        <aside></aside>
      </main>
      <footer style={{ paddingTop: "10px" }}>
        <Contacts />
      </footer>
    </>
  );
}

export default WritePage;
