import Archive from "./components/Archive";
import BestMusic from "./components/BestMusic";
import Contacts from "./components/Contacts";

function HomePage() {
  return (
    <>
      <main>
        <aside></aside>
        <section>
          <BestMusic src="https://open.spotify.com/embed/track/2LcmbuYX7tyR4DWy3b273L?utm_source=generator" />
          <hr />
          <h5>
            <em>Blog. And more</em>
          </h5>
          <h1>Currently</h1>
          putting everything aside and enjoying Erasmus in Netherlands. So
          everything you read in this website is suspended. <br />
          working on CODING and WRITING (check out these category pages with the
          links above). And also I'm still studying, learning dutch, writing
          music sheet for my piano pieces and tutoring, so also have to deal
          with that... ALSO: Writing "the Book of everything" (about logic rules
          and paradigms).
          <h1>Future projects</h1>
          <ul>
            <li>Tutorials about after school math/physics/computerScience</li>
            <li>Electronics project - making SMP-1</li>
            <li>
              Projects (and/or tutorials) according to the uni (|CS|, phy, math)
              courses
            </li>
          </ul>
          <h1>Lifetime idea:</h1>
          <p>
            Understand everything. Make something big out of it (something like
            a new ideology)
          </p>
          <br />
          <a href="https://youtu.be/0Nwi_o2NJ1g">
            Youtube Noname no 7 - Audrius Tyliūnas composition
          </a>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0Nwi_o2NJ1g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <br />
          <br />
          <a href="https://youtu.be/b-iR1_1BqbQ">Youtube Gymnopedia no 1</a>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/b-iR1_1BqbQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <br />
          <br />
          Who's Audrius? It my creative personality. Or in other words, writing
          nickname. For composition haven't come up with an idea how to sign my
          work. So for now I'm borrowing Audrius Tyliūnas name from the writer.
          <div
            style={{
              display: "flex",
              marginTop: "10%",
              gap: "2em",
              flexWrap: "wrap",
            }}
          >
            <h3>Best piano music list</h3>
            <ul>
              <li>Listz - Hungarian Rhapsody no. 2</li>
              <li>Listz - La campanella</li>
              <li>Bethoven - Moonlight sonata Mvt1 & 3</li>
              <li>Debussy - je te veux</li>
              <li>Debussy - Golliwogg's Cakewalk</li>
              <li>Chopin - Etude Op. 25 No. 11</li>
            </ul>
            <Archive />
            <Contacts />
          </div>
          Previous Best Music:
          <BestMusic src="https://open.spotify.com/embed/track/5RX8T3EoTuXcybAxe6oPAw?utm_source=generator" />
          <BestMusic src="https://open.spotify.com/embed/track/58X7dPjUgODIOKKB1m0xo8?utm_source=generator" />
          <BestMusic src="https://open.spotify.com/embed/track/0UtnpKaReKUg2GquaSxCyD?utm_source=generator" />
          <BestMusic src="https://open.spotify.com/embed/track/35UePqF4pjXRtIsF7jLBFi?utm_source=generator" />
          <BestMusic src="https://open.spotify.com/embed/playlist/2knht5lNl5ht9BwH0yFiP2?utm_source=generator" />
          <BestMusic src="https://open.spotify.com/embed/track/5z0Wa1EiCoaUafx83WszRY?utm_source=generator" />
          <BestMusic src="https://open.spotify.com/embed/track/4RUKTGXjyRM3wdksLgC6Ca?utm_source=generator&theme=0" />
          <BestMusic src="https://open.spotify.com/embed/track/4StypY6VnE9BqgqQ0ni1tg?utm_source=generator&theme=0" />
        </section>
        <aside></aside>
      </main>
      <footer>Naglis/Audrius 2023</footer>
    </>
  );
}

export default HomePage;
