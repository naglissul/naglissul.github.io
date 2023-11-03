import { Link } from "react-router-dom";
import Reading from "./components/Reading";

export default function ShortDreamsPage() {
  return (
    <section>
      <h2>Cover</h2>
      <h2>About</h2>
      <p>
        Šiame leidinyje (knygutėje) bus patalpintas labai trumpų istorijų apie
        sapnus rinkinys. Dauguma šių istorijų jau yra mano pasakota per slemus,
        todėl esu pasidalinęs jų pradinėmis draft versijomis{" "}
        <Link to="/write/slam/">slemo puslapyje</Link>, bei esu atrinkęs ir
        surašęs į vieną dokumentą šiame puslapyje žemiau. Bet tai nėra visos
        trumpos istorijos, kurios bus šiame leidinyje. Bus dar bent dvi: "O kas
        jei?" ir "Ar tave sapnavau. Bet tai ne esmė".
      </p>
      <p>
        Dauguma šių istorijų yra įkvėpta kitų žmonių pasakojimų arba savo paties
        patirtų jausmų. Pirmoji idėja buvo visas šias istorijas integruoti į
        "Sniego" knygas, tačiau vėliau supratau, kad turiu per daug idėjų, ir
        rašyti romaną užtrunka per daug laiko. Todėl sugalvojau toms idėjoms
        suteikti nedidelį kūną, slemo skaitinių pavidalu.{" "}
      </p>
      <p>
        Taip pat kai kurios istorijos yra labai artimai susietos su "Sniego"
        istorija, tačiau dėl apimties turi truputį pakeistas idėjas
      </p>
      <h2>Draft version</h2>
      <h3>Download PDF</h3>
      <Reading
        name="Trumpi sapnai"
        src="assets/readings/other/short-dreams.pdf"
      />
    </section>
  );
}
