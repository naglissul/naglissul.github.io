import { Link } from "react-router-dom";
import { readingsOther } from "../../constants";
import Reading from "./components/Reading";
//is eiles - pirmiausia dvipusis namas. padaryt kad galetu komentarus rasyt ir ivertinti zvaigzdutem. feedbackui el laiska rasyt
function WritePage() {
  return (
    <section>
      <h1>Apie mane</h1>
      <p>
        Aš esu Audrius Tyliūnas. Mėgėjas rašytojas. Rašau fantastiką apie sapnus
        su filosofijos ir siaubo elementais. Nesiekiu pinigų, tačiau siekiu, kad
        mano istorijos pasiektų kuo daugiau žmonių ir jiems sukeltų vaizduotės
        magijos jausmą. Noriu parašyti bent tris romano apie sapnus "Sniegas"
        dalis.
      </p>
      <p>
        Sekit instagram'e{" "}
        <a href="https://www.instagram.com/audriustyliunas/">
          @audriustyliunas
        </a>{" "}
        ir facebook'e{" "}
        <a href="https://www.facebook.com/profile.php?id=100090809108632">
          Audrius Tyliūnas
        </a>
        . Rašykit grįžtamąjį ryšį paštu{" "}
        <a href="mailto:tyliunas.audrius@gmail.com">
          tyliunas.audrius@gmail.com
        </a>
      </p>
      <h1>Rašliavos</h1>
      <p>
        Skaitykit, dalinkitės, rašykit grįžtamąjį ryšį. Parašykit man į{" "}
        <a href="mailto:tyliunas.audrius@gmail.com">
          tyliunas.audrius@gmail.com
        </a>{" "}
        ir atsiųsiu dar neišleistus "Pirmojo sniego" ir "Pernykščio sniego"
        tekstus, mainais į grįžtamąjį ryšį.
      </p>
      <div
        style={{
          display: "flex",
          gap: "2em",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Reading
          name="Saldainiai (500 žodžių)"
          src="assets/readings/saldainiai.pdf"
          read=""
        />
        <Reading
          name="Suplaktos kavos lašas (300 žodžių)"
          src="assets/readings/kava.pdf"
          read=""
        />
        <Reading
          name="Trumpi sapnai (po 300 žodžių)"
          src="assets/readings/sapnai.pdf"
          read=""
        />
        <Reading
          name="Kitas lapelis (2100 žodžių)"
          src="assets/readings/lapelis.pdf"
          read=""
        />
        <Reading
          name="Kurtinančiai tyli naktis dvipusiame name arba Ką padarysi... (8400 žodžių)"
          src="assets/readings/namas.pdf"
          read=""
        />
        <Reading
          name="Santrauka: Kurtinančiai tyli naktis dvipusiame name arba Ką padarysi... (1200 žodžių)"
          src="assets/readings/snamas.pdf"
          read=""
        />
        <Reading
          name="Šeštasis sapnas (pradžia) (300 žodžių)"
          src="assets/readings/ssapnas.pdf"
          read=""
        />
      </div>
      <h1>Šiuo metu</h1>
      <ul>
        <li>
          Dirbu ties romanu "Pirmasis sniegas". Taisau antrąjį skyrių (iš trijų)
        </li>
        <li>
          Ieškau grįžtamojo ryšio, įkvėpimo ir patarimų einant rašymo keliu
        </li>
      </ul>

      <h1>Ateityje</h1>
      <ul>
        <li>Tęsiu "Pernykščio sniego" rašymą</li>
        <li>Baigsiu rašyti "Trumpi sapnai" istorijas</li>
      </ul>
      <h1>Kita</h1>
      <a
        href="https://radiovilnius.live/marija-kavtaradze-2/"
        rel="noreferrer"
        target="_blank"
      >
        Teksto "Suodžiai" skaitymas RadioVilnius
      </a>
      <div>Ties laiku: 01:10:46</div>
      <h1>Atskiri rašliavų puslapiai</h1>
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
        <Link to="/write/slam/">Slam'as</Link>
      </p>
      <p>
        <Link to="/write/short-dreams/">Trumpi sapnai</Link>
      </p>
    </section>
  );
}

export default WritePage;
