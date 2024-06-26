import { Link } from "react-router-dom";
import BestMusic from "./components/BestMusic";
import { Icon } from "../../generalComponents/ContactsFooter";
import { MOBILE_THRESHOLD } from "../../constants";

// USE SASS
// Add more pages - branching from Home (or add "Other" thingy for the things that are permanently accomodated and leave Home for new/crumbs)
// Branch tree for pages/section in a page in aside
// Also about cookies... And spotify embeds - make just a double link (youtube&spotify)

// Separate pages for articles. And write articles MOSLY WITH STRUCTURE. Other articles could be more informal
// ARTICLES formal (e.g. https://complianz.io/youtube-and-the-gdpr-how-to-embed-youtube-on-your-site/)
// or informal (Whats the diff between blog posts???) - BUT NOT UPDATES!!! all updates can be written in Currently section
// Articles can be fr Teach section (only (?) then use latex - otherwise md (?))

function HomePage() {
  return (
    <section>
      <BestMusic name="P. Tchaikovsky - The Nutcracker, Op. 71, Act II, Scene XIV: Waltz of the Flowers" />
      <hr />
      {/* <div
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <h2>Tinklapis yra tvarkomas...</h2>
        <em>
          &emsp; Šiuo metu šis tinklapis yra tvarkomas. Planuojama:
          <li>Sutvarkyti blog puslapį ir .md failų skaitymą</li>
          <li>
            Įkelti blog postų bei kitaip tinklapyje aprašyti dabartinius
            projektus, planuojamus projektus ir veiklas: programavimas,
            akademiniai dalykai, pagalba 12-okams laikant egzaminus, rašymas bei
            kita.
          </li>
        </em>
      </div> */}
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
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <Link to="/write/the-first-snow/">
          <h2>Pirmasis sniegas</h2>
        </Link>
        <em>
          &emsp;
          <Link to="/write/the-first-snow/">
            Fantastikos su psichologijos elementais knyga apie sapnus
          </Link>
        </em>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <Link to="https://testai.skafis.lt">
          <h2>testai.skafis.lt</h2>
        </Link>
        <em>
          &emsp;
          <Link to="https://testai.skafis.lt">
            Testavimo platforma (beta versija). Susipažinkite su platforma
            "Naudotojo gide", registruotis galima tik susisiekus su manimi (nes
            platforma nėra stabili).
          </Link>
        </em>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <Link to="/teach/mokslo-gildija/">
          <h2>Prisijunk prie Mokslo Gildijos!</h2>
        </Link>
        <em>
          &emsp;
          <Link to="/teach/mokslo-gildija/">
            Kvietimas paklausyti arba pravesti mini paskaitas (moksleiviams)
            apie savo mokslo sritį
          </Link>
        </em>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <Link to="https://www.vbesort.lt">
          <h2>vbesort.lt</h2>
        </Link>
        <em>
          &emsp;
          <Link to="https://www.vbesort.lt">
            Surūšiuotos VBE ir PUPP užduotys
          </Link>
        </em>
      </div>{" "}
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <Link to="https://www.sci-dict.org">
          <h2>sci-dict.org</h2>
        </Link>
        <em>
          &emsp;
          <Link to="https://www.sci-dict.org">Mokslinis žodynas</Link>
        </em>
      </div>{" "}
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <Link to="https://www.skafis.lt">
          <h2>Skafis.lt</h2>
        </Link>
        <em>
          &emsp;
          <Link to="https://www.skafis.lt">
            Testų generavimo priemonė (bei testavimo aplinkos alfa versija)
          </Link>
        </em>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <Link to="/write/">
          <h2>Write (Vilniaus knygų mugei)</h2>
        </Link>
        <em>
          &emsp;
          <Link to="/write/">Audriaus Tyliūno rašymo puslapis</Link>
        </em>
      </div>
      <p>2023-10-05 New blog post (a bit autobio)</p>
      <em>
        &emsp;
        <Link to="/blog/">Het is geneog!</Link>
      </em>
      <p>2023-09-10 Uploaded all old blog posts</p>
      <em>
        &emsp;
        <Link to="/blog/">Archive blog posts (scroll to the end)</Link>
      </em>
      <p>2023-09-01 Uploaded 5-8 grade math problems</p>
      <em>
        &emsp;
        <a href="https://github.com/naglissul/blog-posts/tree/main/tutorials/5-8tests">
          My own original problems (ie not stolen). Use as you like. (external
          link)
        </a>
      </em>
      <p>Old assembly game uploaded</p>
      <em>
        &emsp;
        <Link to="/code/">Description of the jumper game from 2021</Link>
      </em>
      <p>New blog post</p>
      <em>
        &emsp;
        <Link to="/blog/">
          Studentas-studentui matieka ir kiti mokymo(si) projektai
        </Link>
      </em>
      <p>Science dictionary LT -{">"} EN</p>
      <em>
        &emsp;
        <a href="http://sci-dict.lt">
          Check out, use and contribute! (external link)
        </a>
      </em>
      <p>Uploaded tutorial</p>
      <em>
        &emsp;
        <Link to="/teach/konsp/">
          IT VBE (until 2024) tutorial/template (scroll to the bottom)
        </Link>
      </em>
      <p>New slam texts</p>
      <em>
        &emsp;
        <Link to="/write/slam/">Groningeno traukinys & People are basic </Link>
      </em>
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
      <span
        style={{
          display: "flex",
          flexDirection: `${
            window.innerWidth < MOBILE_THRESHOLD ? "column" : "row"
          }`,
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link to="/blog/">Blog</Link>
        </div>
        <div>
          <Link to="/code/">Code</Link>
        </div>
        <div>
          <div>
            <Link to="/write/">Write</Link>
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
            <Link to="/teach/mgbi/">MGBI (mirus)</Link>
          </div>
          <div>
            &emsp;
            <Link to="/teach/korep/">Korepetitorius</Link>
          </div>
          <div>
            &emsp;
            <Link to="/teach/konsp/">Konspektai (suspended)</Link>
          </div>
          <div>
            &emsp;
            <Link to="/teach/mokslo-gildija/">Mokslo gildija</Link>
          </div>
        </div>
        <div>
          <Link to="/music/">Music</Link>
        </div>
      </span>
      <h1>Ideas for the future</h1>
      <ul>
        <li>A set of short stories, called "Trumpi sapnai"</li>
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
          theorem, Hilbert's Foundations of geometry, Principa Matematica,
          Zermelo-Fraenkel set theory, Peano axioms, Philosophy of science,
          First-order formal logic, etc.).
        </li>
      </ul>
      <h1>About Me</h1>
      <p>
        I'm a lost soul, trying to do as much as it can in this life, cuz there
        might not be another. On a mission to create something big.
      </p>
      <p>
        All the job market and social status stuff you can find in my LinkedIn
        profile :)
      </p>
      <h1>My contacts</h1>
      <h3>Audrius Tyliūnas (for writing)</h3>
      <ul>
        <li>
          Email for feedback, corrections, suggestions, etc. about fiction:{" "}
          <a href="mailto:tyliunas@audrius@gmail.com">
            tyliunas.audrius@gmail.com
          </a>
        </li>
        <li>
          <div
            style={{
              display: "flex",
              flexDirection: `${
                window.innerWidth < MOBILE_THRESHOLD ? "column" : "row"
              }`,
            }}
          >
            Social media - sharing fiction writing updates and other:__
            <Icon href="https://instagram.com/audriustyliunas" />
            __
            <Icon href="https://www.facebook.com/profile.php?id=100090809108632" />
          </div>
        </li>
      </ul>
      <h3>For everything else</h3>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:naglis.suliokas@gmail.com">
            naglis.suliokas@gmail.com
          </a>
          <ul>
            <li>
              <a href="mailto:naglis.suliokas@gmail.com?subject=Error%20report%20for%20NoPointWritings%20website&body=Hi,%0A%0AI've%20found%20an%20error%20in%20your%20NoPointWritings%20website...">
                "I noticed an error" template
              </a>
            </li>
            <li>
              <a href="mailto:naglis.suliokas@gmail.com?subject=Suggestion%20for%20NoPointWritings%20website&body=Hi,%0A%0AI've%20a%20suggestion%20for%20your%20NoPointWritings%20website...">
                "I have a suggestion" template
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div
            style={{
              display: "flex",
              flexDirection: `${
                window.innerWidth < MOBILE_THRESHOLD ? "column" : "row"
              }`,
            }}
          >
            LinkedIn:__
            <Icon href="https://www.linkedin.com/in/naglissul/" />
          </div>
        </li>
        <li>
          <div
            style={{
              display: "flex",
              flexDirection: `${
                window.innerWidth < MOBILE_THRESHOLD ? "column" : "row"
              }`,
            }}
          >
            Other social media:__
            <Icon href="https://www.instagram.com/naglisaudrius" /> __
            <Icon href="https://www.facebook.com/profile.php?id=100014978984368" />
            __
            <Icon href="https://www.youtube.com/@naglisaudrius" />
          </div>
        </li>
        <li>
          <div
            style={{
              display: "flex",
              flexDirection: `${
                window.innerWidth < MOBILE_THRESHOLD ? "column" : "row"
              }`,
            }}
          >
            Others:__
            <Icon href="https://open.spotify.com/user/0labnwjaw8ife28ldwgqjpknh?si=93bc027711194fe1" />
            __
            <Icon href="https://www.github.com/naglissul/" />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default HomePage;
