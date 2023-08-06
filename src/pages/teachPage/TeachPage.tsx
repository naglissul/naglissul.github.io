import { Link } from "react-router-dom";

function TeachPage() {
  return (
    <section>
      <h1>Currently</h1>working on other projects (Coding and Writing), but when
      I get to the teaching category - first I will be creating some rules as of
      a teacher and writing summaries/tutorials about school maths/physics
      according to the national education programme in Lithuania. After that
      maybe improve my, as a math and physics tutor, work. Everything will be
      listed in this page.
      <h1>Lifetime idea:</h1>
      <p>
        To make a revolution in education system (everywhere) - add more
        phylosophy (related with math)
      </p>
      <h1>
        <Link to="/teach/korep/">Korepetitorius</Link>
      </h1>
      <h1>
        <Link to="/teach/mgbi/">MGBI</Link>
      </h1>
      <h1>
        <Link to="/teach/konsp/">Konspektai</Link>
      </h1>
      <h1>
        <Link to="/teach/vocabulary/">Žodynas</Link>
      </h1>
    </section>
  );
}

export default TeachPage;
