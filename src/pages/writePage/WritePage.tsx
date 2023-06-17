import { Link } from "react-router-dom";

function WritePage() {
  return (
    <section>
      <h1>
        <Link to="/write/fiction/">Fiction</Link>
      </h1>
      <h1>
        <Link to="/write/other/">Other</Link>
      </h1>
    </section>
  );
}

export default WritePage;
