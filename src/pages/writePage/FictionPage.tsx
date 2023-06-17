import { readingsOther, readingsSlam, readingsSnow } from "../../constants";
import Reading from "./components/Reading";
import WritingCategory from "./components/WritingCategory";

function FictionPage() {
  return (
    <section>
      <h1>Currently</h1>
      working on my novel "Pirmasis sniegas". Editing the second chapter (out of
      three)
      <h1>Future projects</h1>
      <ul>
        <li>Continue writing "Pernykštis sniegas"</li>
      </ul>
      <h1>Blog pinned</h1>
      <a
        href="https://radiovilnius.live/marija-kavtaradze-2/"
        rel="noreferrer"
        target="_blank"
      >
        "Suodžiai" reading on RadioVilnius
      </a>
      <div>Time stamp: 01:10:46</div>
      <h1>Blog latest</h1>
      <h1>About me</h1>
      <h1>Lifetime idea:</h1>
      <p>
        Write at least 3 parts of novel Snow. Would be great to write maybe 5 or
        6 parts in total. Then have it in good quality and have a movie or
        animation made about it. And would be nice if people read it :)
      </p>
      <WritingCategory name="Snow. EXCERPTS ONLY" />
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
      © Naglis Šuliokas{" "}
      {/*2023 Later make that all the pdf files be stored in blog-posts repository, and there would be the copyright. And for this repository code you could make whatever you want */}
      {/*Also make a new repository, so that the old writing files would ACTUALLY not be able to find */}
      {/* <h1>Sniegas, slam, kiti tekstai... Language categories</h1> */}
    </section>
  );
}

export default FictionPage;
