import Archive from "./components/Archive";
import BestMusic from "./components/BestMusic";
import Contacts from "./components/Contacts";

function HomePage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ paddingTop: "1em", textAlign: "center" }}>
        No Point Writings
      </h1>

      <hr style={{ margin: "0 10%" }} />

      <BestMusic />
      <hr style={{ margin: "0 10%" }} />
      <h5>
        <em>Blog. And more</em>
      </h5>
      <h3 style={{ paddingTop: "5%" }}>
        <em>More coming soon...</em>
      </h3>
      <div style={{ display: "flex", margin: "10%", gap: "10%" }}>
        {" "}
        <Archive />
        <Contacts />
      </div>

      <footer>Naglis/Audrius 2023</footer>
    </div>
  );
}

export default HomePage;
