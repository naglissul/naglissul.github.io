import VocWord from "./components/VocWord";
import voc from "./voc.json";

function VocabularyPage() {
  return (
    <section>
      <h3>LT-EN-NL Math, Physics and Computer Science vocabulary</h3>
      <p>Not reviewed by other people (only me) </p>
      <p>
        For a new word or a better translation suggestions please email me{" "}
        <a href="mailto:naglis.suliokas@gmail.com">naglis.suliokas@gmail.com</a>
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
          </tr>
          {voc.map((word) => (
            <VocWord key={word.lt} lt={word.lt} en={word.en} nl={word.nl} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default VocabularyPage;
