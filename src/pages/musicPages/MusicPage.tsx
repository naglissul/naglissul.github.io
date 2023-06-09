import Contacts from "../homePage/components/Contacts";

function MusicPage() {
  return (
    <>
      <main>
        <aside></aside>
        <section>
          <h1>Piano</h1>
          <br />
          <a href="https://youtu.be/0Nwi_o2NJ1g">
            Youtube Noname no 7 - Audrius Tyliūnas composition
          </a>
          <br />
          <a href="https://youtu.be/b-iR1_1BqbQ">Youtube Gymnopedia no 1</a>
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
          />
          <h3>Best piano music list</h3>
          <ul>
            <li>Listz - Hungarian Rhapsody no. 2</li>
            <li>Listz - La campanella</li>
            <li>Bethoven - Moonlight sonata Mvt1 & 3</li>
            <li>Debussy - je te veux</li>
            <li>Debussy - Golliwogg's Cakewalk</li>
            <li>Chopin - Etude Op. 25 No. 11</li>
          </ul>
        </section>

        <aside></aside>
      </main>
      <footer style={{ paddingTop: "10px" }}>
        <Contacts />
      </footer>
    </>
  );
}

export default MusicPage;
