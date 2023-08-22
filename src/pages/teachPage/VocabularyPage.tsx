import { Link } from "react-router-dom";
import VocWord from "./components/VocWord";
import voc from "./voc.json";

function VocabularyPage() {
  return (
    <section>
      <h3>LT-EN-NL Math, Physics and Computer Science vocabulary</h3>
      <p>Not reviewed by other people (only me) </p>
      <p>
        For a new word or a better translation suggestions please email me{" "}
        <a href="mailto:naglis.suliokas@gmail.com">naglis.suliokas@gmail.com</a>{" "}
        or create pull request at{" "}
        <a href="https://github.com/naglissul/naglissul.github.io/blob/main/src/pages/teachPage/voc.json">
          github
        </a>
      </p>
      <hr />
      <table>
        <caption>
          <em>USE CTRL+F TO FIND YOUR WORD</em>
        </caption>
        <tbody>
          <tr>
            <th>LT</th>
            <th>EN</th>
            <th>NL</th>
            <th>comments</th>
          </tr>
          {voc.map((word) => (
            <VocWord
              key={word.lt}
              lt={word.lt}
              en={word.en}
              nl={word.nl}
              comments={word.comments}
            />
          ))}
        </tbody>
      </table>
      <p>
        You can probably find more translations in
        <Link to="/teach/konsp/"> konspektai page</Link> under LT {"->"} EN
        sections
      </p>
      <p>
        comments: 1. VU Programų sistemos 2021-2022 1kursas: MPS - matematika
        programų sistemoms I/IIId, DM - diskrečioji matematika, AT - algoritmų
        teorija, PP - procedūrinis programavimas (C) 2. MMT - VU Matematika ir
        matematikos taikymai 1kursas
      </p>
      <h5>Keywords for google:</h5>
      <p style={{ fontSize: "5px" }}>
        lietuviskai angliskai fizika matematika kompiuteriu mokslas Fizikoje
        Fizikos Angliškai angliškai fizikoje fizikos matematikos matke matkė
        matieka kompiuterių mokslas lietuviškai į lietuvių kalbą į lietuvių į
        anglų į anglų kalbą i anglu i lietuviu i anglu kalba i lietuviu kalba
        vertimas isversti zodynas išversti žodynas mokslinis žodynas terminų
        žodynas terminai terminu zodynas fizikos zodynas matematikos zodynas
        matematikos terminai fizikos terminai lt en lt-en lietuviu-anglu
        {voc.map((word) => (
          <p>
            {word.lt} angliskai {word.lt} angliškai {word.en} lietuviskai{" "}
            {word.en} lietuviškai {word.nl} in het engels{" "}
          </p>
        ))}
      </p>
    </section>
  );
}

export default VocabularyPage;
