import { Link } from "react-router-dom";

function SchoolPage() {
  return (
    <section>
      <p>
        Šis puslapis skirtas informacijai apie 5-8 kl. matematikos ir
        informacinių technologijų švietimą Lietuvoje pagal programą, galiojančią
        iki 2024-08-31
      </p>
      <a href="https://sodas.ugdome.lt/viesieji-puslapiai/7300">Programa</a>
      <p>
        <Link to="/teach/school/math/">Matematika</Link>
      </p>
      <p>
        <Link to="/teach/school/it/">Informatika</Link>
      </p>
    </section>
  );
}

export default SchoolPage;
