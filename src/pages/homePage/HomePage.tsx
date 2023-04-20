import Archive from "./components/Archive";
import BestMusic from "./components/BestMusic";
import Contacts from "./components/Contacts";

function HomePage() {
  return (
    <>
      <main>
        <aside></aside>
        <section>
          <BestMusic src="https://open.spotify.com/embed/track/5z0Wa1EiCoaUafx83WszRY?utm_source=generator" />
          <BestMusic src="https://open.spotify.com/embed/playlist/2knht5lNl5ht9BwH0yFiP2?utm_source=generator" />
          <hr />
          <h5>
            <em>Blog. And more</em>
          </h5>
          <h1>Currently</h1>
          working on CODING and WRITING (check out these category pages with the
          links above). And in addition I am working on piano compositions,
          learning some piano pieces - planning to upload it to youtube and
          maybe decently record my compositions for soundCloud of even Spotify.
          And also I'm still studying and tutoring, so also have to deal with
          that...
          <h1>Future projects</h1>
          <ul>
            <li>Tutorials about after school math/physics/computerScience</li>
            <li>Electronics project - making SMP-1</li>
            <li>
              Projects (and/or tutorials) according to the uni (|CS|, phy, math)
              courses
            </li>
          </ul>
          <br />
          <br />
          <a href="https://youtu.be/b-iR1_1BqbQ">Youtube Gymnopedia no 1</a>
          <br />
          <a href="https://youtu.be/0Nwi_o2NJ1g">
            Youtube Noname no 7 - Audrius Tyliūnas composition
          </a>
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
            <Archive />
            <Contacts />
          </div>
          Previous Best Music:
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
