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
          <h1>Currently</h1>
          working on my novel "Pirmasis sniegas". Editing the second chapter
          (out of three)
          <h1>Future projects</h1>
          <ul>
            <li>Continue writing "Pernykštis sniegas"</li>
          </ul>
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
                key={reading.name}
                name={reading.name}
                src={`assets/readings/sniegas/${reading.fileName}`}
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
                key={reading.name}
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
                key={reading.name}
                name={reading.name}
                src={`assets/readings/other/${reading.fileName}`}
                date={reading.date}
                wordCount={reading.wordCount}
              />
            ))}
          </div>
          © Naglis Šuliokas 2023. All rights reserved (regarding the files with
          text)
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
