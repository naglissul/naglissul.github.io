import { Link } from "react-router-dom";

function MusicPage() {
  return (
    <section>
      <h1>
        <Link to="/music/listen/">Music to listen</Link>
      </h1>
      <h1>
        <Link to="/music/piano/">Piano</Link>
      </h1>
      <h1>
        <Link to="/music/compose/">Compositions</Link>
      </h1>
    </section>
  );
}

export default MusicPage;
