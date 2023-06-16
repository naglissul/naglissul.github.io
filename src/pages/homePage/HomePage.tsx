import { Link } from "react-router-dom";
import Archive from "./components/Archive";
import BestMusic from "./components/BestMusic";
import ContactsFooter from "../../generalComponents/ContactsFooter";

// USE SASS
// Add more pages - branching from Home (or add "Other" thingy for the things that are permanently accomodated and leave Home for new/crumbs)
// Branch tree for pages/section in a page in aside
// Also about cookies... And spotify embeds - make just a double link (youtube&spotify)

// Separate pages for articles. And write articles MOSLY WITH STRUCTURE. Other articles could be more informal
// ARTICLES formal (e.g. https://complianz.io/youtube-and-the-gdpr-how-to-embed-youtube-on-your-site/) or informal (Whats the diff between blog posts???) - BUT NOT UPDATES!!! all updates can be written in Currently section
// Articles can be fr Teach section (only (?) then use latex - otherwise md (?))

function HomePage() {
  return (
    <section>
      <BestMusic name="Royal Blood - Mountains At Midnight" />
      <hr />
      <h5>
        <em>
          This is... Blog. And more. Currently putting everything aside and
          enjoying Erasmus in Netherlands. So everything you read in this
          website is suspended.
        </em>
      </h5>
      <h1>Newest</h1>
      <h1>Structure to browse</h1>
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/blog/">Blog</Link>
        <Link to="/code/">Code</Link>
        <Link to="/write/">Write</Link>
        <Link to="/teach/">Teach</Link>
        <Link to="/music/">Music</Link>
      </span>

      <h1>Future projects/ideas</h1>
      <ul>
        <li>Tutorials about after school math/physics/computerScience</li>
        <li>Electronics project - making SMP-1</li>
        <li>
          Projects (and/or tutorials) according to the uni (|CS|, phy, math)
          courses
        </li>
        <li>
          New pages/categories (with articles about what might be interesting to
          regular people): Studies(PS and other INFO), Chemistry(KURMIS is pure
          NaOH), Physics, ComputerScience and Math (separated from teaching, can
          overlap with MGBI), Electronics (overlapping a lot...)
        </li>
        <li>Film development at home</li>
        <li>Languages</li>
        <li>
          Animation. 3d models, animations. stop motion. (For music videos,
          writing, gamedev)
        </li>
        <li>Creating and performing rock or indie music</li>
      </ul>

      <br />
      <h1>About Me + Contacts</h1>
      <h3>Lifetime idea:</h3>
      <p>
        Understand everything. Make something big out of it (something like a
        new ideology)
      </p>

      <Archive />
    </section>
  );
}

export default HomePage;
