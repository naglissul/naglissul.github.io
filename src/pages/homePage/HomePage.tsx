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
      <BestMusic name="Sir Sly - &Run" />
      <hr />
      <h1>
        <em>This is...</em>
      </h1>
      <p>
        <em>
          ... portfolio-like website/blog, to have all the things, I want to
          share, categorized in one place. Good luck surfin' around!
        </em>
      </p>
      <h1>Latest</h1>
      <p>New blog post</p>
      <em>
        &emsp;
        <Link to="/blog/">
          Productivity recap (documentation) - second study year
        </Link>
      </em>
      <p>
        Skanaus skaitymo!<sub> LT</sub>
      </p>
      <h1>Website structure</h1>
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to="/blog/">Blog</Link>
        </div>
        <div>
          <Link to="/code/">Code</Link>
        </div>
        <div>
          <div>
            <Link to="/W\write/">Write</Link>
          </div>
          <div>
            &emsp;
            <Link to="/write/deafening-night/">
              Kurtinančiai tyli naktis dvipusiame name arba Ką padarysi...
            </Link>
          </div>
          <div>
            &emsp;
            <Link to="/write/slam/">Slam</Link>
          </div>
          <div>
            &emsp;
            <Link to="/write/the-first-snow/">Pirmasis sniegas</Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/teach/">Teach</Link>
          </div>
          <div>
            &emsp;
            <Link to="/teach/school/">Mokykla 5-8 kl.</Link>
          </div>
          <div>
            &emsp; &emsp;
            <Link to="/teach/school/math/">Matematika</Link>
          </div>
          <div>
            &emsp; &emsp;
            <Link to="/teach/school/it/">Informatika</Link>
          </div>
          <div>
            &emsp;
            <Link to="/teach/mgbi/">MGBI</Link>
          </div>
          <div>
            &emsp;
            <Link to="/teach/korep/">Korepetitorius</Link>
          </div>
          <div>
            &emsp;
            <Link to="/teach/konsp/">Konspektai</Link>
          </div>
        </div>
        <div>
          <Link to="/music/">Music</Link>
        </div>
      </span>
      <p>...</p>

      <h1>Ideas for the future</h1>
      <ul>
        <li>Blog about studies</li>
        <li>Electronics project - making SMP-1</li>
        <li>
          New pages/categories:
          <ul>
            <li>chemistry</li>
            <li>electronics</li>
            <li>all about uni (Computer Science, Physics, Math)</li>
          </ul>
        </li>
        <li>
          "The Book of everything" - an article/book about logic rules and
          paradigms (following Goedel's numbers, Goedel's incompleteness
          theorem, Hilbert's Foundations of geometry, Principa Matematica, Set
          theory, Peano axioms, Philosophy of science, Formal logic, etc.).
        </li>
      </ul>
      <h1>About Me</h1>
      <p>
        I'm a lost soul, trying to do as much as it can in this life, cuz there
        might not be another. On a mission to create something big.
      </p>
      <p>
        All the job market related stuff you can find in my LinkedIn profile :)
      </p>
      <h1>My contacts</h1>
      <p>...</p>
      <Archive />
    </section>
  );
}

export default HomePage;
