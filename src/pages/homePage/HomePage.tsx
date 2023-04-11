import Archive from "./components/Archive";
import BestMusic from "./components/BestMusic";
import Contacts from "./components/Contacts";

function HomePage() {
  return (
    <>
      <main>
        <aside></aside>
        <section>
          <BestMusic />
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
          that
          <a href="https://youtu.be/b-iR1_1BqbQ">Youtube Gymnopedia no 1</a>
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
        </section>
        <aside></aside>
      </main>
      <footer>Naglis/Audrius 2023</footer>
    </>
  );
}

export default HomePage;
