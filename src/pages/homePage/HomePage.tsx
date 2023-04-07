import Archive from "./components/Archive";
import BestMusic from "./components/BestMusic";
import Contacts from "./components/Contacts";

function HomePage() {
  return (
    <div style={{ textAlign: "center" }}>
      <BestMusic />
      <hr />
      <h5>
        <em>Blog. And more</em>
      </h5>
      <h3 style={{ paddingTop: "5%" }}>
        <em>More coming soon...</em>
      </h3>
      <div
        style={{
          display: "flex",
          marginTop: "10%",
          gap: "2em",
          flexWrap: "wrap",
        }}
      >
        <Archive />
        <Contacts />
      </div>

      <footer>Naglis/Audrius 2023</footer>
    </div>
  );
}

export default HomePage;
