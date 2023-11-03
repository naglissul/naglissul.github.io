import { Link } from "react-router-dom";
import { readingsOther } from "../../constants";
import Reading from "./components/Reading";
//is eiles - pirmiausia dvipusis namas. padaryt kad galetu komentarus rasyt ir ivertinti zvaigzdutem. feedbackui el laiska rasyt
function WritePage() {
  return (
    <section>
      This page gonna have my FICTION writings mostly in LT but also a few in
      EN.
      <h1>Currently</h1>
      working on my novel "Pirmasis sniegas". Editing the second chapter (out of
      three).
      <h1>Future projects</h1>
      <ul>
        <li>Continue writing "Pernykštis sniegas"</li>
        <li>Finish writing "Trumpi sapnai" short stories</li>
      </ul>
      <h1>Featured</h1>
      <a
        href="https://radiovilnius.live/marija-kavtaradze-2/"
        rel="noreferrer"
        target="_blank"
      >
        "Suodžiai" reading on RadioVilnius
      </a>
      <div>Time stamp: 01:10:46</div>
      <h1>About me</h1>
      <h3>Lifetime idea:</h3>
      <p>
        Write at least 3 parts of novel Snow. Would be great to write maybe 5 or
        6 parts in total. Then have it in good quality and have a movie or
        animation made about it. And would be nice if people read it :)
      </p>
      <h1>My writings</h1>
      <p>
        <Link to="/write/deafening-night/">
          Kurtinančiai tyli naktis dvipusiame name arba Ką padarysi...
        </Link>
      </p>
      <p>
        <Link to="/write/the-first-snow/">Pirmasis sniegas</Link>
      </p>
      <p>
        <Link to="/write/the-last-years-snow/">Pernykštis sniegas</Link>
      </p>
      <p>
        <Link to="/write/other-snow/">Kitos Sniego dalys</Link>
      </p>
      <p>
        <Link to="/write/slam/">Slam</Link>
      </p>
      <p>
        <Link to="/write/short-dreams/">Trumpi sapnai</Link>
      </p>
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
          />
        ))}
        <p>
          You can probably find more short stories in the{" "}
          <Link to="/blog/">blog page</Link>
        </p>
      </div>
    </section>
  );
}

export default WritePage;
