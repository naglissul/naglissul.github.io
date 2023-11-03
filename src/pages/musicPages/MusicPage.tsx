import { Link } from "react-router-dom";

function MusicPage() {
  return (
    <section>
      <h1>Piano compositions (by Audrius Tyliūnas)</h1>
      <p>
        Who's Audrius? It's my creative personality. Or in other words, writing
        nickname. For composition haven't come up with an idea how to sign my
        work. So for now I'm borrowing Audrius Tyliūnas name from the writer.{" "}
      </p>
      <h3>Noname no. 7</h3>
      <a href="https://youtu.be/0Nwi_o2NJ1g">Link to youtube (external link)</a>
      <h3>Noname no. 3</h3>
      <h3>Noname no. 2</h3>
      <h3>Noname no. 5</h3>
      <h2>Sheets</h2>
      <p>Later gonna write and share my composition sheets here...</p>
      <h1>Classic piano music</h1>
      This section gonna have various content about classical piano music.
      {/* <h1>Piano</h1>
      <br />

      <a href="https://youtu.be/b-iR1_1BqbQ">Youtube Gymnopedia no 1</a>
      <br />
      <br />
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
      </ul> */}
      <h1>Spotify playlists</h1>
      This section gonna have various content about music that I think is worth
      sharing.
      <a href="">My spotify profile (external link)</a>
      {/* <p>Rock, Metal, Pop, Classical, Indie and more... Spotify playlists...</p> */}
      <h3>Best violin music</h3>
      <ul>
        <li>Angel's serenade</li>
        <li>Vivaldi</li>
        <li>Paganini</li>
      </ul>
      <h3>Best piano music list:</h3>
      <ul>
        <li>Listz - Liebestraum</li>
        <li>Chopin - Revolution etude</li>
        <li>Sibelius Etude.</li>
        <li>Listz - Hungarian Rhapsody no. 2</li>
        <li>Listz - La campanella</li>
        <li>Bethoven - Moonlight sonata Mvt1 & 3</li>
        <li>Debussy - je te veux</li>
        <li>Debussy - Golliwogg's Cakewalk</li>
        <li>Chopin - Etude Op. 25 No. 11</li>
      </ul>
      <p>
        Later will be possible to sort by difficulcy, also links to pdf music
        sheets.
      </p>
      <p>
        Also some day gonna make a concert somewhere. Cuz I think there are some
        people that would value live classical music, even from non-professional
        musician.
      </p>
    </section>
  );
}

export default MusicPage;
