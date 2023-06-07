import Archive from "./components/Archive";
import BestMusic from "./components/BestMusic";
import Contacts from "./components/Contacts";

// USE SASS
// Add more pages - branching from Home (or add "Other" thingy for the things that are permanently accomodated and leave Home for new/crumbs)
// Branch tree for pages/section in a page in aside
// Also about cookies... And spotify embeds - make just a double link (youtube&spotify)

// Separate pages for articles. And write articles MOSLY WITH STRUCTURE. Other articles could be more informal
// ARTICLES formal (e.g. https://complianz.io/youtube-and-the-gdpr-how-to-embed-youtube-on-your-site/) or informal (Whats the diff between blog posts???) - BUT NOT UPDATES!!! all updates can be written in Currently section
// Articles can be fr Teach section (only (?) then use latex - otherwise md (?))

function HomePage() {
  return (
    <>
      <main>
        <aside></aside>
        <section>
          <BestMusic name="Royal Blood - Mountains At Midnight" />
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
            <li>
              New pages/categories (with articles about what might be
              interesting to regular people): Studies(PS and other INFO),
              Chemistry(KURMIS is pure NaOH), Physics, ComputerScience and Math
              (separated from teaching, can overlap with MGBI), Electronics
              (overlapping a lot...)
            </li>
            <li>Film development at home</li>
            <li>MGBI</li>
            <li>korep</li>
            <li>
              Animation. 3d models, animations. stop motion. (For music videos,
              writing, gamedev)
            </li>
            <li>Creating and performing rock or indie music</li>
          </ul>
          <h1>Lifetime idea:</h1>
          <p>
            Understand everything. Make something big out of it (something like
            a new ideology)
          </p>
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
            <h1>Learning Can Be Interesting</h1>
            <p>
              {" "}
              (liet.: mokslas gali būti įdomus) - Lectures by students - uni in
              highschool style +Stud-stud (?)
            </p>
            {/* <h1>Treasure hunt (private) (also make a platform?) </h1> */}
            <h1>Geo cachy thingy</h1>
            <h3>NL</h3>
            <br />
            {/* <p>LIN spinteles - QR codes... to this web. As a key to open encoded file?</p> */}
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
